# DYR_IdleVideoTitle Plugin for RPG Maker MV

This plugin allows you to automatically play a video after a certain idle time in the title menu screen.

## Features

- Automatically plays a video after a specified idle time on the title menu screen.
- Allows you to configure the map ID to transfer to and the amount of idle time before transferring.
- Provides options to set the video resolution.
- Script command to enable or disable the plugin.

## Installation

1. Download the `DYR_IdleVideoTitle.js` file.
2. Place the file in your RPG Maker MV project's `js/plugins/` directory.
3. In RPG Maker MV, open the Plugin Manager and enable the `DYR_IdleVideoTitle` plugin.

## Parameters

- **mapId:** The ID of the map to transfer to.
- **idleTime:** The amount of idle time (in seconds) before transferring to the map.
- **videoWidth:** The width of the video resolution.
- **videoHeight:** The height of the video resolution.
- **enabled:** If the plugin is enabled.

## Usage

1. Create a new map in your game with an auto-run event.
2. Prompt the player with a choice, asking if they want to watch the video or skip it.
3. If the player chooses to watch the video, use the "Show Video" event command to play the video.
4. When the video finishes playing, call the script `SceneManager.goto(Scene_Title);` to return to the title screen.
5. If the player chooses to skip the video, proceed with other event commands, including returning to the title screen.

## Script Commands

You can enable or disable this plugin with a script call. For example, to disable the plugin, use:
```javascript
PluginManager.parameters('DYR_IdleVideoTitle')['enabled'] = false;
