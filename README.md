
# DYR_IdleVideoTitle Plugin for RPG Maker MV

This plugin allows you to automatically play a video after a certain idle time in the title menu screen.
## Danyerusama

- [@Danyerusama](https://www.github.com/danyerusama)


## Appendix

The Idle Video Title plugin enhances the title screen of your RPG Maker MV game by allowing you to showcase an introductory video to your players. Engage players from the moment they start your game with captivating videos that set the mood and immerse them into your game's world

## Features

- Automatically plays a video after a specified idle time on the title menu screen.
- Allows you to configure the map ID to transfer to and the amount of idle time before transferring.
- Provides options to set the video resolution.
- Script command to enable or disable the plugin.


## Installation

1. Download the DYR_IdleVideoTitle.js file.
2. Place the file in your RPG Maker MV project's js/plugins/ directory.
3. In RPG Maker MV, open the Plugin Manager and enable the 
``` 
'DYR_IdleVideoTitle' Plugin

```
    
## Usage/Examples

1. Create a new map in your game with an auto-run event.
2. Prompt the player with a choice, asking if they want to watch the video or skip it.
3. If the player chooses to watch the video, use the "Show Video" event command to play the video.
4. When the video finishes playing, call the Event command: ``` go to title screen``` to return to the title screen.
5. If the player chooses to skip the video, proceed with other event commands, including returning to the title screen.


## Screenshots

1. New Video Map:
   
![Map_Zone](https://github.com/Danyerusama/DYR_IdleVideoTitle/assets/142346653/d5be882b-2537-436c-8d09-39ba35eed88a)

2. Project Event Congig:
   
![Project Event Config](https://github.com/Danyerusama/DYR_IdleVideoTitle/assets/142346653/a3123efa-6207-4eab-9bf7-7b1cdb2880dd)

3. Plugin Config:
   
![Plugin Config](https://github.com/Danyerusama/DYR_IdleVideoTitle/assets/142346653/ce3b821e-35b9-48f8-b36b-b66c196f08d3)



LICENSE
## License
MIT License

Copyright (c) 2023 DANYERUSAMA

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
