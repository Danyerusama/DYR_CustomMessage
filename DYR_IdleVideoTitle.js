/*:
 * @plugindesc This plugin allows to auto-play a video after a certain idle time in the title menu screen.
 * @author Danyerusama
 * 
 * @param mapId
 * @desc The ID of the map to transfer to.
 * @type number
 * @default 1
 *
 * @param idleTime
 * @desc The amount of idle time (in seconds) before transferring to the map.
 * @type number
 * @default 5
 *
 * @param videoWidth
 * @desc The width of the video resolution.
 * @type number
 * @default 640
 *
 * @param videoHeight
 * @desc The height of the video resolution.
 * @type number
 * @default 480
 *
 * @param enabled
 * @desc If this plugin is enabled.
 * @type boolean
 * @default true
 * 
 * @help
 *=============================================================================
 * DYR_IdleVideoTitle.js
 * Author: Danyerusama
 * Version: 1.0.1
 *============================================================================= 
 *
 * == Warning Note ==
 * Before anything you need to be sure what is your project resolution to use the same one in this plugin, for example: 1280x720)
 * This plugin uses 640x480 as default.
 *
 * == Parameters ==
 * mapId: The ID of the map to transfer to.
 * idleTime: The amount of idle time (in seconds) before transferring to the map.
 * videoWidth: The width of the video resolution. 
 * videoHeight: The height of the video resolution.
 * enabled: If this plugin is enabled.
 *
 * == Script Commands ==
 *You can enable or disable this plugin with a script call. 
 *For example, to disable the plugin, you would use:  
 *"PluginManager.parameters('Danyeru_IdleVideoTitle')['enabled'] = false;"
 *
 * == Usage ==
 * - To use, simply install the plugin and specify the map ID, idle time, video width, and video height in the plugin parameters.
 * 
 * - You should create a new map in your game with an auto-run event. This event should prompt the player with a choice, asking if they want to watch the video or skip it.
 *
 * - If the player chooses to watch the video, you should use the "Show Video" event command to play the video. When the video finishes playing, it should call the script "SceneManager.goto(Scene_Title);" to return to the title screen.
 *
 * - If the player chooses to skip the video, you can proceed with any other event commands you desire, including returning to titile screen.
 *
 * - The player will be transferred to this specified map after the specified idle time on the title screen. The auto-run event on the map should take care of playing the video (if chosen) and returning to the title screen.
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
    // Get plugin parameters
    var parameters = PluginManager.parameters('DYR_IdleVideoTitle');
    var mapId = Number(parameters['mapId'] || 1);
    var idleTime = Number(parameters['idleTime'] || 5);
    var enabled = parameters['enabled'].toLowerCase() === 'true';

    var oldPartyMembers = [];  // this will hold the actor IDs of the original party members
    var titleBgm;  // this will hold the title BGM that was playing

    // Extend Scene_Title_create
    var _Scene_Title_create = Scene_Title.prototype.create;
    Scene_Title.prototype.create = function() {
        _Scene_Title_create.call(this);
        this._idleTimer = 0;
    };

    // Extend Scene_Title_update
    var _Scene_Title_update = Scene_Title.prototype.update;
    Scene_Title.prototype.update = function() {
        _Scene_Title_update.call(this);

        if (!enabled) return;

        if (Input.isTriggered('ok') || Input.isTriggered('cancel')) {
            this._idleTimer = 0;
        } else {
            this._idleTimer += 1.0 / 60.0;  // assuming 60 FPS
        }

        if (this._idleTimer >= idleTime) {
            DataManager.setupNewGame();
            oldPartyMembers = $gameParty.members().map(actor => actor.actorId());
            
            // Remove all party members
            while ($gameParty.members().length > 0) {
                $gameParty.removeActor($gameParty.members()[0].actorId());
            }

            titleBgm = AudioManager.saveBgm();  // Save current BGM
            AudioManager.stopBgm();  // Stop current BGM

            $gamePlayer.reserveTransfer(mapId, 0, 0);
            SceneManager.goto(Scene_Map);
        }
    };

    var _Scene_Title_start = Scene_Title.prototype.start;
    Scene_Title.prototype.start = function() {
        _Scene_Title_start.call(this);
        if (oldPartyMembers.length > 0) {
            oldPartyMembers.forEach(function(actorId) {
                $gameParty.addActor(actorId);
            });
            oldPartyMembers = [];

            AudioManager.playBgm(titleBgm);  // Play saved BGM
        }
    };
})();
