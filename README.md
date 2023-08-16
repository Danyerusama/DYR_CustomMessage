
# DYR_CustomMessage Plugin for RPG Maker MV

The **DYR_CustomMessage** plugin empowers you to provide engaging interactions with treasure events in your RPG Maker MV game. Display customized messages and items to players when they interact with treasure objects, enriching their experience and adding depth to your game world.

## View Code and Download File

[DYR_CustomMessage.js](https://github.com/Danyerusama/DYR_CustomMessage/blob/4da4eb673e64b7010de586820f2a5076c77c0528/DYR_CustomMessage.js)

## Appendix

The DYR_CustomMessage plugin is designed to add a more interactive dimension to your treasure events in your RPG Maker MV game. With this plugin, you can customize the messages and rewards that players receive when interacting with treasure objects in your game world. This allows you to create moments of excitement and reward, enriching the player's experience and enabling you to add unique touches to your adventure.

## Features

- Customize messages when interacting with treasure events.
- Define which events are considered treasures.
- Control the text size for the messages.
- Specify the position and background for the message window.
- Reward players with items when interacting with treasures.


## Installation

1. Download the `DYR_CustomMessage.js` plugin file.
2. Place the file in your RPG Maker MV project's `js/plugins/` directory.
3. Access the Plugin Manager within RPG Maker MV and activate the `DYR_CustomMessage` plugin.

   
## Usage
Interacting with Treasure Objects:
- To set up treasure objects, specify their event IDs in the "Treasure Events" parameter in the plugin.
- Define whether to use default or custom messages for interactions with treasures using the "Use Custom Message" parameter.
- Customize the message itself in the "Custom Message" parameter, incorporating text character control if desired.
- Adjust the text size using escape sequences within the message for visual emphasis.
- Select the position and background for the message window using the "Message Position" and "Message Background" parameters.
- Determine the maximum number of items that can be given as rewards through the "Max Items Given" parameter.

Rewarding the Player:
- Specify the items to give and their quantities in the "Objects to Give" parameter (format: ID:Quantity, ID:Quantity, ...).
- Customize the SE sound played with the message using the "SE Name," "SE Volume," and "SE Pitch" parameters.


## Screenshots

1. New Map:
   
![Map_Zone](https://github.com/Danyerusama/DYR_IdleVideoTitle/assets/142346653/d5be882b-2537-436c-8d09-39ba35eed88a)

2. Project Event Config:
     
![Project Event Config](https://github.com/Danyerusama/DYR_IdleVideoTitle/assets/142346653/a3123efa-6207-4eab-9bf7-7b1cdb2880dd)

3. Plugin Config:
   
![Plugin Config](https://github.com/Danyerusama/DYR_IdleVideoTitle/assets/142346653/ce3b821e-35b9-48f8-b36b-b66c196f08d3)

## Video DEMO

[Demo](https://github.com/Danyerusama/DYR_IdleVideoTitle/assets/142346653/1777624a-7cb2-4bb9-83b7-f61e100adb0f)

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/Danyerusama/DYR_IdleVideoTitle/blob/94ceb843b5d2f9b5f51aa7eec3788e41f5f0cdb3/LICENSE) file for more details.
