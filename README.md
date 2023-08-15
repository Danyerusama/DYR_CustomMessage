
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



## License
This project is licensed under the MIT License - see the [@LICENSE](https://github.com/Danyerusama/DYR_IdleVideoTitle/blob/94ceb843b5d2f9b5f51aa7eec3788e41f5f0cdb3/LICENSE) file for details.
