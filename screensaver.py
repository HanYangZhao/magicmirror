#!/usr/bin/env python
 
import sys
import time
import RPi.GPIO as io
import subprocess
 
io.setmode(io.BOARD)
SHUTOFF_DELAY = 10  # seconds
PIR_PIN = 10         # Pin 26 on the board
 
def main():
    io.setup(PIR_PIN, io.IN)
    turned_off = False
    last_motion_time = time.time()
 
    while True:
        #print(io.input(PIR_PIN))
        if io.input(PIR_PIN):
            last_motion_time = time.time()
            sys.stdout.flush()
            if turned_off:
                turned_off = False
                turn_on()
        else:
            if not turned_off and time.time() > (last_motion_time + SHUTOFF_DELAY):
                turned_off = True
                turn_off()
        time.sleep(1)
 
def turn_on():
    subprocess.call('sh /home/pi/monitor_on.sh', shell=True)
    print("turning on")
 
def turn_off():
    subprocess.call('sh /home/pi/monitor_off.sh', shell=True)
    print("turning off")
 
if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print("Exit")
    finally:
        io.cleanup()
