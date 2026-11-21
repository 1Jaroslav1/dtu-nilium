# Microphone PoC

Plot the Atech microphone's RMS sound level over time using only USB and a
browser. The firmware sends a level every 250 ms. The plot shows the most recent
30 seconds in dBFS (decibels relative to digital full scale). This is a relative
signal level. It would need calibration to measure acoustic sound pressure in
dB SPL. Zero readings are shown at the bottom of the chart.

1. Match `board` and `ports` in [project.yaml](project.yaml) to your hardware.
   The example uses a 14-port board with the microphone across ports 1 and 2.
2. Connect the board with a USB data cable. With the repo's Python environment
   active, run these commands from the repo root:

   ```sh
   atech validate microphone-poc
   atech upload microphone-poc
   python -m http.server 8000 --bind 127.0.0.1 --directory microphone-poc
   ```

3. Open [the local plot](http://localhost:8000/) in Chrome or Edge, click
   **Connect microphone**, and select the Atech USB serial port. Close any serial
   monitor first. Speak or clap near the microphone to see the level rise.

The page holds the recent level readings in memory. Only the measured levels
leave the board as microphone data. Disconnect the page before flashing the board
again. The page connects through [Web Serial](https://developer.chrome.com/docs/capabilities/serial/).
