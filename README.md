
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

1. Event Config:
   

![Event Config](https://github.com/Danyerusama/DYR_IdleVideoTitle/assets/142346653/8f142ff8-3482-453c-b295-05205ae8ced3)

2. Plugin Config:
     
![Plugin Config3](https://github.com/Danyerusama/DYR_IdleVideoTitle/assets/142346653/90125320-6107-4a57-b000-f9baedd31254)

3. Treasure Popup Message:
   
![TreasurePopUp](https://github.com/Danyerusama/DYR_IdleVideoTitle/assets/142346653/9e8724e5-c899-4ffc-ad9e-4a96aff55508)

## Video DEMO

[Demo](https://github.com/Danyerusama/DYR_IdleVideoTitle/assets/142346653/1777624a-7cb2-4bb9-83b7-f61e100adb0f)

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/Danyerusama/DYR_IdleVideoTitle/blob/94ceb843b5d2f9b5f51aa7eec3788e41f5f0cdb3/LICENSE) file for more details.
