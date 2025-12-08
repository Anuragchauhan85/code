import cv2
import imutils
from datetime import datetime
import RPi.GPIO as GPIO

rtsp_urls = [
    'rtsp://username:password@ip_address:port/stream1',  # Camera 1
    'rtsp://username:password@ip_address:port/stream2'   # Camera 2
]

relay_pins = [17, 27]

GPIO.setmode(GPIO.BCM)
GPIO.setup(relay_pins, GPIO.OUT)

def control_relay(camera_index, state):
    GPIO.output(relay_pins[camera_index], state)

def detect_motion(stream_url, camera_index):
    cap = cv2.VideoCapture(stream_url)
    first_frame = None

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        frame = imutils.resize(frame, width=500)
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        gray = cv2.GaussianBlur(gray, (21, 21), 0)

        if first_frame is None:
            first_frame = gray
            continue

        frame_delta = cv2.absdiff(first_frame, gray)
        thresh = cv2.threshold(frame_delta, 25, 255, cv2.THRESH_BINARY)[1]
        thresh = cv2.dilate(thresh, None, iterations=2)

        cnts = cv2.findContours(thresh.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        cnts = imutils.grab_contours(cnts)

        motion_detected = False
        for contour in cnts:
            if cv2.contourArea(contour) < 500:
                continue

            motion_detected = True
            (x, y, w, h) = cv2.boundingRect(contour)
            cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
            timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            cv2.putText(frame, timestamp, (10, 20), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2)

        if motion_detected:
            control_relay(camera_index, GPIO.HIGH)
        else:
            control_relay(camera_index, GPIO.LOW)

        cv2.imshow(f'Stream from {stream_url}', frame)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

for index, url in enumerate(rtsp_urls):
    detect_motion(url, index)

GPIO.cleanup()
