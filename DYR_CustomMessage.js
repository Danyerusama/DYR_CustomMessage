/*:
 * @plugindesc Plugin to display custom messages when interacting with Treasure Events.
 * 
 * @author Danyerusama
 * 
 * @param Enable Plugin
 * @desc Enable or disable the plugin (true/false).
 * @default true
 * 
 * @param Treasure Events
 * @desc Comma-separated list of event IDs that represent treasures.
 * @default 1,2,3
 * 
 * @param Use Custom Message
 * @desc Choose whether to use a custom message when interacting with the object. (true: Use Custom Message, false: Default Message)
 * @default true
 * 
 * @param Custom Message
 * @desc Custom message to display when interacting with the object. You can use text character control here.
 * @default You have found:
 * 
 * @param Text Size Control
 * @desc Choose whether to use custom text size or default size for the message. (true: Custom Size, false: Default Size)
 * @default true
 * 
 * @param Message Position
 * @desc Position of the message on the screen (0: Top, 1: Middle, 2: Bottom).
 * @default 0
 * 
 * @param Message Background
 * @desc Background type for the message window. (0: None, 1: Normal, 2: Dim)
 * @default 1
 * 
 * @param Objects to Give
 * @desc List of items to give with their quantities. Format: ID:Quantity, ID:Quantity, ...
 * @default 1:4, 2:5, 3:1, 4:8
 * 
 * @param Max Items Given
 * @desc Maximum number of items that can be given. (Default is 3)
 * @default 3
 * 
 * @param SE Name
 * @desc SE sound file name to play when displaying the message. Leave empty to not play a sound.
 * @default Chest2
 * 
 * @param SE Volume
 * @desc SE sound volume (0-100).
 * @default 90
 * 
 * @param SE Pitch
 * @desc SE sound pitch (50-150).
 * @default 100
 * 
 * @help
 *=============================================================================
 * DYR_CustomMessage.js
 * Author: Danyerusama
 * Version: 1.4.0
 *============================================================================= 
 * 
 * == Script Command ==
 * var pluginParams = PluginManager.parameters('DYR_CustomMessage');
 * var objectsToGive = pluginParams['Objects to Give'].split(',').map(function(data) {
 *     var [itemID, amount] = data.split(':');
 *     return { id: parseInt(itemID), amount: parseInt(amount) };
 * });
 * 
 * == Text Size ==
 * To decrease text size in the message, use the escape sequence \}.
 * To increase text size in the message, use the escape sequence \{.
 * 
 * == Note == 
 * The maximum number of items that can be given is 3.
 * 
 * == Copyright Notice ==
 * This plugin is created by Danyerusama and is protected by copyright laws.
 * © 2023 Danyerusama. All rights reserved.
 * 
 * Terms of Use:
 * You are allowed to use this plugin in both free and commercial games.
 * To edit the code, please contact the author via E-mail at "danyerusama >>gmail<<" and obtain approval.
 * 
 * Ownership and Redistribution:
 * This plugin remains the intellectual property of Danyerusama.
 * Please do not claim this plugin as your own or redistribute it without explicit permission.
 * Modifying the filename, parameters, and plugin information is not allowed.
 * 
 * Credit and Attribution:
 * If you use code from this plugin for your own released plugins or projects, ensure to give proper credit to the original author (Danyerusama).
 * 
 * Thank you for your understanding and cooperation.

 */

(function() {
    var parameters = PluginManager.parameters('DYR_CustomMessage');
    var enablePlugin = (parameters['Enable Plugin'] === 'true');
    var treasureEventIDs = parameters['Treasure Events'].split(',').map(function(id) {
        return parseInt(id);
    });
    var useCustomMessage = (parameters['Use Custom Message'] === 'true');
    var customMessage = useCustomMessage ? (parameters['Custom Message'] + "\\}") : null;
    var useCustomTextSize = (parameters['Text Size Control'] === 'true');
    var messagePosition = parseInt(parameters['Message Position']);
    var messageBackground = parseInt(parameters['Message Background']); // Parse to integer
    var seName = parameters['SE Name'];
    var seVolume = parseInt(parameters['SE Volume']);
    var sePitch = parseInt(parameters['SE Pitch']);
    var maxItemsGiven = parseInt(parameters['Max Items Given']) || 3;

    var _Game_Player_triggerTouchAction = Game_Player.prototype.triggerTouchAction;
    Game_Player.prototype.triggerTouchAction = function() {
        if (!this._triggeredTreasureEvents) {
            this._triggeredTreasureEvents = [];
        }
        if ($gameMap.isEventRunning() || !enablePlugin) return;

        var direction = this.direction();
        var x1 = this.x;
        var y1 = this.y;
        var x2 = $gameMap.roundXWithDirection(x1, direction);
        var y2 = $gameMap.roundYWithDirection(y1, direction);
        var object = $gameMap.eventIdXy(x2, y2);

        if (treasureEventIDs.includes(object) && !this._triggeredTreasureEvents.includes(object)) {
            this._triggeredTreasureEvents.push(object);

            var objectsToGive = parameters['Objects to Give'].split(',').map(function(data) {
                var [itemID, amount] = data.split(':');
                return { id: parseInt(itemID), amount: parseInt(amount) };
            });

            if (seName) {
                var se = {
                    name: seName,
                    volume: seVolume,
                    pitch: sePitch,
                    pan: 0
                };
                AudioManager.playSe(se);
            }

            var itemsGiven = [];
            var lineItems = [];
            var currentLineItemCount = 0;

            objectsToGive.slice(0, maxItemsGiven).forEach(function(obj) {
                var item = $dataItems[obj.id];
                $gameParty.gainItem(item, obj.amount);
                var text = "\\I[" + item.iconIndex + "] \\}" + "x" + obj.amount + " " + item.name + "\\}";
                if (useCustomTextSize) {
                    text = text + "\\{";
                }
                lineItems.push(text);
                currentLineItemCount += 1;

                if (currentLineItemCount >= 5) {
                    itemsGiven.push(lineItems.join(" "));
                    lineItems = [];
                    currentLineItemCount = 0;
                }
            });

            if (lineItems.length > 0) {
                itemsGiven.push(lineItems.join(" "));
            }

            var message = "";
            if (useCustomMessage) {
                message = customMessage + "\n";
            }
            message += itemsGiven.join("\n");

            $gameMessage.setBackground(messageBackground); // Use the parsed integer
            $gameMessage.setPositionType(messagePosition);
            $gameMessage.add(message);
        }

        _Game_Player_triggerTouchAction.call(this);
    };
})();
