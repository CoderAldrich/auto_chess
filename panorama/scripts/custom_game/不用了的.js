?          REDI   ?  DATA?  ?? P              ?                                  0                         J          N   w   +???   panorama/scripts/custom_game/不用了的.vjs dota_addons/dac panorama/scripts/custom_game/不用了的.js dota_addons/dac     $           ___OverrideInputData___ BinaryBlobArg                 CompilePanorama Panorama Script Compiler Version           IsChildResource         B0i  
//这个不用了
function get_all_cards_inner(info){
    var cards = info;
    var stack_minion = [];
    var stack_hero = [];
    var stack_ward = [];
    var stack_spell = [];
    var count_minion = {};
    var count_hero = {};
    var count_ward = {};
    var count_spell = {};
    var del_minion = {};
    var del_hero = {};
    var del_ward = {};
    var del_spell = {};
    hidden = [];
    for (var i in cards){
        if (cards[i].status == 0){
            hidden.push(i);
        }
        else{
            if (cards[i].card_id.substr(0,1) == 'm'){
                if (stack_minion.indexOf(cards[i].card_id) == -1){
                    stack_minion.push(cards[i].card_id);
                }                           
                if (!count_minion[cards[i].card_id]){
                    count_minion[cards[i].card_id] = 1;
                }
                else{
                    count_minion[cards[i].card_id] ++;
                }
                if (cards[i].status == 1 || cards[i].status == "1"){
                    del_minion[cards[i].card_id] = 1;
                }
            }
            if (cards[i].card_id.substr(0,1) == 'h'){
                if (stack_hero.indexOf(cards[i].card_id) == -1){
                    stack_hero.push(cards[i].card_id);
                }                           
                if (!count_hero[cards[i].card_id]){
                    count_hero[cards[i].card_id] = 1;
                }
                else{
                    count_hero[cards[i].card_id] ++;
                }
                if (cards[i].status == 1 || cards[i].status == "1"){
                    del_hero[cards[i].card_id] = 1;
                }
            }
            if (cards[i].card_id.substr(0,1) == 'w'){
                if (stack_ward.indexOf(cards[i].card_id) == -1){
                    stack_ward.push(cards[i].card_id);
                }                           
                if (!count_ward[cards[i].card_id]){
                    count_ward[cards[i].card_id] = 1;
                }
                else{
                    count_ward[cards[i].card_id] ++;
                }
                if (cards[i].status == 1 || cards[i].status == "1"){
                    del_ward[cards[i].card_id] = 1;
                }
            }
            if (cards[i].card_id.substr(0,1) == 'a'){
                if (stack_spell.indexOf(cards[i].card_id) == -1){
                    stack_spell.push(cards[i].card_id);
                }                           
                if (!count_spell[cards[i].card_id]){
                    count_spell[cards[i].card_id] = 1;
                }
                else{
                    count_spell[cards[i].card_id] ++;
                }
                if (cards[i].status == 1 || cards[i].status == "1"){
                    del_spell[cards[i].card_id] = 1;
                }
            }
        }
    }
    stack_minion.sort(function(a,b){
        var ra = parseInt(a.substr(1,1))*100;
        var rb = parseInt(b.substr(1,1))*100;
        var ca = ALL_CARDS[a].c;
        var cb = ALL_CARDS[b].c;
        return (rb+cb)-(ra+ca);
    });
    stack_ward.sort(function(a,b){
        var ra = parseInt(a.substr(1,1))*100;
        var rb = parseInt(b.substr(1,1))*100;
        var ca = ALL_CARDS[a].c;
        var cb = ALL_CARDS[b].c;
        return (rb+cb)-(ra+ca);
    });
    stack_spell.sort(function(a,b){
        var ra = parseInt(a.substr(1,1))*100;
        var rb = parseInt(b.substr(1,1))*100;
        var ca = ALL_CARDS[a].c;
        var cb = ALL_CARDS[b].c;
        return (rb+cb)-(ra+ca);
    });
    stack_hero.sort(function(a,b){
        var ra = parseInt(a.substr(1,1))*100;
        var rb = parseInt(b.substr(1,1))*100;
        var ca = ALL_CARDS[a].c;
        var cb = ALL_CARDS[b].c;
        return (rb+cb)-(ra+ca);
    });
    var str = '';
    for (var i=0;i<stack_minion.length;i++){
        if (i%6 == 0){
            str += '<Panel class = "onecardline">';
        }
        str += '<Panel class = "onecard" onactivate = "add_card(\''+stack_minion[i]+'\');">';
        if (del_minion[stack_minion[i]] == 1){
            str += "<Panel class = 'onecarddelete' onactivate='show_confirm(\"确认删除该卡？\",\"deletecard_"+stack_minion[i]+"\");'></Panel>";
        }
        str += '<Label class = "onecardcount" text = "×'+count_minion[stack_minion[i]]+'"></Label>';
        str += '<Panel class= "onecardimagepanel" >';
        // str += '<Image class = "onecardimage" src="file://{resources}/images/custom_game/'+stack_minion[i]+'.png"/>';
        str += '<Panel class = "onecardimage" style="background-image:url(\'file://{resources}/images/custom_game/'+stack_minion[i]+'.png\');"/>';
        str += '<Panel class = "onecardname"  style="background-color:'+RARITY_COLOR[parseInt(stack_minion[i].substr(1,1))]+';"><Label text = "'+$.Localize(ALL_CARDS[stack_minion[i]].name)+'"></Label></Panel>';
        str += '</Panel>';
        str += '<Panel class = "onecardinfo">';
        str += '<Panel class="icon_m"/>';
        str += '<Label class = "onecardtext" text = "'+ALL_CARDS[stack_minion[i]].c+'"></Label>';
        str += '<Panel class="icon_a"/>';
        str += '<Label class = "onecardtext" text = "'+ALL_CARDS[stack_minion[i]].a+'"></Label>';
        str += '<Panel class="icon_h"/>';
        str += '<Label class = "onecardtext" text = "'+ALL_CARDS[stack_minion[i]].h+'"></Label>';
        str += '</Panel>';
        str += '<Panel class = "onecarddesc"><Label text = "'+$.Localize(ALL_CARDS[stack_minion[i]].desc)+'"></Label></Panel>';
        str += '</Panel>';
        if (i%6 == 5 || i == stack_minion.length - 1){
            str += '</Panel>';
        }
    }
    $('#type_minion_count').text = stack_minion.length<100?stack_minion.length:'99+';
    if (stack_minion.length == 0){
        $('#type_minion_count').style['color'] = '#888888';
    }
    else{
        $('#type_minion_count').style['color'] = '#ffffff';
    }
    $('#selectminion').RemoveAndDeleteChildren();
    $('#selectminion').BCreateChildren(str);
    var str = '';
    for (var i=0;i<stack_ward.length;i++){
        if (i%6 == 0){
            str += '<Panel class = "onecardline">';
        }
        str += '<Panel class = "onecard" onactivate = "add_card(\''+stack_ward[i]+'\');">';
        if (del_ward[stack_ward[i]] == 1){
            str += "<Panel class = 'onecarddelete' onactivate='show_confirm(\"确认删除该卡？\",\"deletecard_"+stack_ward[i]+"\");'></Panel>";
        }
        str += '<Label class = "onecardcount" text = "×'+count_ward[stack_ward[i]]+'"></Label>';
        str += '<Panel class= "onecardimagepanel" >';
        // str += '<Image class = "onecardimage" src="file://{resources}/images/custom_game/'+stack_ward[i]+'.png"/>';
        str += '<Panel class = "onecardimage" style="background-image:url(\'file://{resources}/images/custom_game/'+stack_ward[i]+'.png\');"/>';
        str += '<Panel class = "onecardname" style="background-color:'+RARITY_COLOR[parseInt(stack_ward[i].substr(1,1))]+';"><Label text = "'+$.Localize(ALL_CARDS[stack_ward[i]].name)+'"></Label></Panel>';
        str += '</Panel>';
        str += '<Panel class = "onecardinfo">';
        str += '<Panel class="icon_m"/>';
        str += '<Label class = "onecardtext" text = "'+ALL_CARDS[stack_ward[i]].c+'"></Label>';
        str += '<Panel class="icon_a"/>';
        str += '<Label class = "onecardtext" text = "'+ALL_CARDS[stack_ward[i]].a+'"></Label>';
        str += '<Panel class="icon_h"/>';
        str += '<Label class = "onecardtext" text = "'+ALL_CARDS[stack_ward[i]].h+'"></Label>';
        str += '</Panel>';
        str += '<Panel class = "onecarddesc"><Label text = "'+$.Localize(ALL_CARDS[stack_ward[i]].desc)+'"></Label></Panel>';
        str += '</Panel>';
        if (i%6 == 5 || i == stack_ward.length - 1){
            str += '</Panel>';
        }
    }
    $('#type_ward_count').text = stack_ward.length<100?stack_ward.length:'99+';
    if (stack_ward.length == 0){
        $('#type_ward_count').style['color'] = '#888888';
    }
    else{
        $('#type_ward_count').style['color'] = '#ffffff';
    }
    $('#selectward').RemoveAndDeleteChildren();
    $('#selectward').BCreateChildren(str);
    var str = '';
    for (var i=0;i<stack_spell.length;i++){
        if (i%6 == 0){
            str += '<Panel class = "onecardline">';
        }
        str += '<Panel class = "onecard" onactivate = "add_card(\''+stack_spell[i]+'\');">';
        if (del_spell[stack_spell[i]] == 1){
            str += "<Panel class = 'onecarddelete' onactivate='show_confirm(\"确认删除该卡？\",\"deletecard_"+stack_spell[i]+"\");'></Panel>";
        }
        str += '<Label class = "onecardcount" text = "×'+count_spell[stack_spell[i]]+'"></Label>';
        str += '<Panel class= "onecardimagepanel" >';
        // str += '<Image class = "onecardimage" src="file://{resources}/images/custom_game/'+stack_spell[i]+'.png"/>';
        str += '<Panel class = "onecardimage" style="background-image:url(\'file://{resources}/images/custom_game/'+stack_spell[i]+'.png\');"/>';

        str += '<Panel class = "onecardname"  style="background-color:'+RARITY_COLOR[parseInt(stack_spell[i].substr(1,1))]+';"><Label text = "'+$.Localize(ALL_CARDS[stack_spell[i]].name)+'"></Label></Panel>';
        str += '</Panel>';
        str += '<Panel class = "onecardinfo">';
        str += '<Image class = "onecardicon" src=""/>';
        str += '<Label class = "onecardtext" text = " "></Label>';
        str += '<Panel class="icon_m"/>';
        str += '<Label class = "onecardtext" text = "'+ALL_CARDS[stack_spell[i]].c+'"></Label>';
        // str += '<Panel class="icon_a"/>';
        // str += '<Label class = "onecardtext" text = "'+ALL_CARDS[stack_spell[i]].a+'"></Label>';
        // str += '<Panel class="icon_h"/>';
        // str += '<Label class = "onecardtext" text = "'+ALL_CARDS[stack_spell[i]].h+'"></Label>';
        str += '</Panel>';
        str += '<Panel class = "onecarddesc"><Label text = "'+$.Localize(ALL_CARDS[stack_spell[i]].desc)+'"></Label></Panel>';
        str += '</Panel>';
        if (i%6 == 5 || i == stack_spell.length - 1){
            str += '</Panel>';
        }
    }
    $('#type_spell_count').text = stack_spell.length<100?stack_spell.length:'99+';
    if (stack_spell.length == 0){
        $('#type_spell_count').style['color'] = '#888888';
    }
    else{
        $('#type_spell_count').style['color'] = '#ffffff';
    }
    $('#selectspell').RemoveAndDeleteChildren();
    $('#selectspell').BCreateChildren(str);
    var str = '';
    for (var i=0;i<stack_hero.length;i++){
        if (i%6 == 0){
            str += '<Panel class = "onecardline">';
        }
        str += '<Panel class = "onecard" onactivate = "choose_hero(\''+stack_hero[i]+'\');">';
        if (del_hero[stack_hero[i]] == 1){
            str += "<Panel class = 'onecarddelete' onactivate='show_confirm(\"确认删除该卡？\",\"deletecard_"+stack_hero[i]+"\");'></Panel>";
        }
        str += '<Label class = "onecardcount" text = "×'+count_hero[stack_hero[i]]+'"></Label>';
        str += '<Panel class= "onecardimagepanel" >';
        // str += '<Image class = "onecardimage" src="file://{resources}/images/custom_game/'+stack_hero[i]+'.png"/>';
        str += '<Panel class = "onecardimage" style="background-image:url(\'file://{resources}/images/custom_game/'+stack_hero[i]+'.png\');"/>';
        str += '<Panel class = "onecardname"  style="background-color:'+RARITY_COLOR[parseInt(stack_hero[i].substr(1,1))]+';"><Label text = "'+$.Localize(ALL_CARDS[stack_hero[i]].name)+'"></Label></Panel>';
        str += '</Panel>';
        str += '<Panel class = "onecardinfo">';
        // str += '<Panel class="icon_m"/>';
        // str += '<Label class = "onecardtext" text = "'+ALL_CARDS[stack_hero[i]].c+'"></Label>';
        str += '<Image class = "onecardicon" src=""/>';
        str += '<Label class = "onecardtext" text = " "></Label>';
        str += '<Panel class="icon_h"/>';
        str += '<Label class = "onecardtext" text = "'+ALL_CARDS[stack_hero[i]].h+'"></Label>';
        str += '</Panel>';
        str += '<Panel class = "onecarddesc"><Label text = "'+$.Localize(ALL_CARDS[stack_hero[i]].desc)+'"></Label></Panel>';
        str += '</Panel>';
        if (i%6 == 5 || i == stack_hero.length - 1){
            str += '</Panel>';
        }
    }
    $('#type_hero_count').text = stack_hero.length<100?stack_hero.length:'99+';
    if (stack_hero.length == 0){
        $('#type_hero_count').style['color'] = '#888888';
    }
    else{
        $('#type_hero_count').style['color'] = '#ffffff';
    }
    $('#selecthero').RemoveAndDeleteChildren();
    $('#selecthero').BCreateChildren(str);
    var str = '';

    for (var i=0;i<hidden.length;i++){
        if (i%6 == 0){
            str += '<Panel class = "onecardline">';
        }
        str += '<Panel class = "onecard flipcard" id = "flip_outer_'+i+'">';
        str += '<Panel id = "flip_'+i+'" class = "flipper unturn" onactivate = "flip_card('+i+',\''+hidden[i]+'\');">';
        str += '<Panel id = "backend_'+i+'" class = "backend">';
        str += '<Image class= "backimg" style = "width:180px;height:280px;font-size:180px;margin:0px;" src="file://{resources}/images/custom_game/backimg_'+allcards[hidden[i]].series+'.jpg" />';
        str += '</Panel>';
        str += '<Panel id = "frontend_'+i+'" class = "frontend invisible">';
        // str += '<Image class = "onecardimage" src="file://{resources}/images/custom_game/'+allcards[hidden[i]].card_id+'.png"/>';
        str += '<Panel class = "onecardimage" style="background-image:url(\'file://{resources}/images/custom_game/'+allcards[hidden[i]].card_id+'.png\');"/>';

        str += '<Panel class = "onecardname"  style="background-color:'+RARITY_COLOR[parseInt(allcards[hidden[i]].card_id.substr(1,1))]+';"><Label text = "'+$.Localize(ALL_CARDS[allcards[hidden[i]].card_id].name)+'"></Label></Panel>';
        str += '<Panel class = "onecardinfo">';
        if (allcards[hidden[i]].card_id.substr(0,1) == 'h'){
            str += '<Image class = "onecardicon" src=""/>';
            str += '<Label class = "onecardtext" text = " "></Label>';
            str += '<Panel class="icon_h"/>';
            str += '<Label class = "onecardtext" text = "'+ALL_CARDS[allcards[hidden[i]].card_id].h+'"></Label>';
        }
        else if (allcards[hidden[i]].card_id.substr(0,1) == 'a'){
            str += '<Image class = "onecardicon" src=""/>';
            str += '<Label class = "onecardtext" text = " "></Label>';
            str += '<Panel class="icon_m"/>';
            str += '<Label class = "onecardtext" text = "'+ALL_CARDS[allcards[hidden[i]].card_id].c+'"></Label>';
        }
        else{
            str += '<Panel class="icon_m"/>';
            str += '<Label class = "onecardtext" text = "'+ALL_CARDS[allcards[hidden[i]].card_id].c+'"></Label>';
            str += '<Panel class="icon_a"/>';
            str += '<Label class = "onecardtext" text = "'+ALL_CARDS[allcards[hidden[i]].card_id].a+'"></Label>';
            str += '<Panel class="icon_h"/>';
            str += '<Label class = "onecardtext" text = "'+ALL_CARDS[allcards[hidden[i]].card_id].h+'"></Label>';
        }
        
        str += '</Panel>';
        str += '<Panel class = "onecarddesc"><Label text = "'+$.Localize(ALL_CARDS[allcards[hidden[i]].card_id].desc)+'"></Label></Panel>';
        str += '</Panel>';
        str += '</Panel></Panel>';
        if (i%6 == 5 || i == hidden.length - 1){
            str += '</Panel>';
        }
    }
    $('#type_hidden_count').text = hidden.length<100?hidden.length:'99+';
    if (hidden.length == 0){
        $('#type_hidden_count').style['color'] = '#888888';
        $('#type_hidden_count').style['background-color'] = '#333333';
    }
    else{
        $('#type_hidden_count').style['color'] = '#fff';
        $('#type_hidden_count').style['background-color'] = '#ff0000';
    }
    $('#selecthidden').RemoveAndDeleteChildren();
    $('#selecthidden').BCreateChildren(str);

    get_all_decks(alldecks);
}

function change_tab(tab){
    if (changed == true){
        changed = false;
        get_all_cards();
    }
    change_tab_status(tab);
}
function change_tab_status(tab){
    Game.EmitSound("ui.books.pageturns");
    $('#selectward').SetHasClass('invisible',true);
    $('#selecthero').SetHasClass('invisible',true);
    $('#selecthidden').SetHasClass('invisible',true);
    $('#selectspell').SetHasClass('invisible',true);
    $('#selectminion').SetHasClass('invisible',true);
    $('#select'+tab).SetHasClass('invisible',false);
    // $('#deckdetail').SetHasClass('invisible',false);

    $('#type_ward').SetHasClass('active',false);
    $('#type_hero').SetHasClass('active',false);
    $('#type_hidden').SetHasClass('active',false);
    $('#type_spell').SetHasClass('active',false);
    $('#type_minion').SetHasClass('active',false);
    $('#type_'+tab).SetHasClass('active',true);
    // $('#deckdetail').SetHasClass('invisible',false);
}
function cards_totop(){
    $('#selectward').ScrollToTop();
    $('#selecthero').ScrollToTop();
    $('#selecthidden').ScrollToTop();
    $('#selectspell').ScrollToTop();
    $('#selectminion').ScrollToTop();
}              
function get_all_decks(deckinfo){
    if (deckinfo){
        get_all_decks_inner(deckinfo);
    }
    else{
        var url = 'http://101.200.189.65:430/dac/deck/get/@'+local_id +'?hehe='+ Math.random();
        $.AsyncWebRequest(url,{ 
            type: 'GET',
            success: function(a) {
                var object = JSON.parse(a);
                if(object.err == 0){
                    get_all_decks_inner(object.deck_list);
                }
            }
        });
    }
}
function get_all_decks_inner(info){
    select_one_deck('deck_1');
    // var str = "";
    // for (var i = 0;i<info.length;i++){
    //     var deck = info[i];

    //     var h = HEROS[allcards[deck.hero].card_id];

    //     if (i%3 == 0){
    //         str += '<Panel class = "deckline">';
    //     }
    //     str += '<Panel class = "onedeck" onactivate="select_one_deck(\''+deck.id+'\')" >';
    //     str += '<Image class = "onedeckimage" src="file://{resources}/images/custom_game/'+allcards[deck.hero].card_id+'.png"/>';
    //     str += '<Label class = "onedecktitle" text = "'+deck.name+'"></Label>';
    //     str += '</Panel>';

    //     if (i%3 == 2 || i == info.length - 1){
    //         str += '</Panel>';
    //     }
    // }
    // $('#decklist').RemoveAndDeleteChildren();
    // $('#decklist').BCreateChildren(str);

    // str = '';

    // $('#deckdetail').SetHasClass('invisible',true);

    // battlestr = '';
    // // select_one_deck(info[0].id);
}
var is_count_down_ready = false;
function count_down(){
    $.Schedule(1,function(){
        timeout --;
        if (timeout <0 || is_count_down_ready){
            // var deckrandom = [];
            // for (var i=0;i<alldecks.length;i++){
            //     deckrandom.push(alldecks[i].id);
            // }
            // var deckno = Math.floor(Math.random()*deckrandom.length);
            // battle_one_deck(deckrandom[deckno]);
            // $("#deckchoose").SetHasClass("invisible",true);

            $("#deckchoose").style["opacity"] = "0";
        }
        else{
            $('#timecount').text = timeout;
            Game.EmitSound("General.CastFail_AbilityInCooldown")
            count_down();
        }
    });
}
function new_deck(){
    Game.EmitSound("ui.chat_close");
    var default_hero = 'card_1';
    for (var i in allcards){
        if (allcards[i].card_id.substr(0,1) == 'h'){
            default_hero = allcards[i].id;
            break;
        }
    }
    curr_deck = {
        id: null,
        hero: default_hero,
        name: 'newdeck',
        cards: []
    };

    $('#deckdetail').SetHasClass('invisible',false);
    $('#newdeckname').text = curr_deck.name;
    show_deck_details(curr_deck);
}
function select_one_deck(deck_id){
    Game.EmitSound("ui.chat_close");
    var deck;
    for (var i=0;i<alldecks.length;i++){
        if (alldecks[i].id ==deck_id){
            deck = alldecks[i];
        }
    }
    $('#deckdetail').SetHasClass('invisible',false);
    // $('#newdeckname').text = deck.name;
    // 复制一份对象结构出来，便于修改deck
    for (var i in deck){
        if (i == "cards"){
            curr_deck[i] = [];
            for (var j=0;j<deck[i].length;j++){
                curr_deck[i].push(deck[i][j]);
            }
        }
        else{
            curr_deck[i] = deck[i];
        }
    }
    show_deck_details(curr_deck);
}
function battle_one_deck(deck_id, hero_id){
    GameEvents.SendCustomGameEventToServer( "battle_deck", {"steam_id" : local_id, "deck_id": deck_id, "hero":hero_id, "hehe":Math.random()});

    $("#deckchoose").style["opacity"] = "0";
    Game.EmitSound("Item.PickUpGemShop");
    is_count_down_ready = true;
}
function show_deck_details(deck){

    var h = allcards[deck.hero].card_id;
    // $("#deckimage").SetImage("file://{resources}/images/custom_game/"+h+".png");
    $("#deckimage").style['background-image'] = "url('file://{resources}/images/custom_game/"+h+".png')";

    deck.cards.sort(function(a,b){
        var c1 = ALL_CARDS[allcards[a].card_id].c *100000;
        var c2 = ALL_CARDS[allcards[b].card_id].c *100000;

        c1 = c1 + parseInt(allcards[a].card_id.substr(1,1))*10000;
        c2 = c2 + parseInt(allcards[b].card_id.substr(1,1))*10000;

        if (allcards[a].card_id.substr(0,1) == 's') c1 = c1+1000;
        if (allcards[b].card_id.substr(0,1) == 's') c2 = c2+1000;

        if (allcards[a].card_id.substr(0,1) == 'w') c1 = c1+100;
        if (allcards[b].card_id.substr(0,1) == 'w') c2 = c2+100;

        c1 = c1 + parseInt(allcards[a].card_id.substr(2,2));
        c2 = c2 + parseInt(allcards[b].card_id.substr(2,2));

        return c1-c2;
    });

    var str = '';
    for (var i = 0;i<deck.cards.length;i++){
        var d = deck.cards[i];
        if (i==0){
            str += '<Panel id = "deckcards1">';
        }
        if (i==15){
            str += '<Panel id = "deckcards2">';
        }
        str += '<Panel class = "deckcard" style="background-color:'+RARITY_COLOR[parseInt(allcards[d].card_id.substr(1,1))]+';" onactivate = "remove_card(\''+allcards[d].id+'\');">';
        str += '<Panel style="width:75px;height:50px;margin:0px;background-image:url(\'file://{resources}/images/custom_game/'+allcards[d].card_id+'.png\');background-position:center;background-size:100% 150%;margin-right:0px;"/>';
        str += '<Label class = "cardname" text = "'+$.Localize(ALL_CARDS[allcards[d].card_id].name)+'"></Label>';
        str += '<Panel class="icon_m" style="margin-top:12px;"/>';
        str += '<Label class = "cardmana" text = "'+ALL_CARDS[allcards[d].card_id].c+'"></Label>';

        str += '</Panel>';
        if (i==14 || i==deck.cards.length-1){
            str += '</Panel>';
        }
    }
    $('#deckcards').RemoveAndDeleteChildren();
    $('#deckcards').BCreateChildren(str);
}
function remove_card(card_id){
    var index = curr_deck.cards.indexOf(card_id);
    curr_deck.cards.splice(index,1);
    Game.EmitSound("ui.chat_close");

    show_deck_details(curr_deck);
}
function add_card(card){
    if (!curr_deck || !curr_deck.cards){
        // show_msg($.Localize('deckrequired'));
        return;
    }
    if (curr_deck.cards.length>=30){
        show_msg($.Localize('deckfull'));
        return;
    }
    if (check_card(card,curr_deck) >= 5){
        show_msg($.Localize('5mostindeck'));
        return;
    }
    // 找出同名的最小的未使用的cardid
    var min_card_id = null;
    for (var i in allcards){
        if (allcards[i].card_id == card && (allcards[i].status == 1 || allcards[i].status == 2) && curr_deck.cards.indexOf(allcards[i].id)<0) {
            if (!min_card_id){
                min_card_id = allcards[i].id;
            }
            else{
                if (parseInt(min_card_id.substr(5))>parseInt(allcards[i].id.substr(5))){
                    min_card_id = allcards[i].id;
                }
            }
        }
    }

    if (min_card_id){
        Game.EmitSound("ui.chat_open");
        curr_deck.cards.push(min_card_id);
        show_deck_details(curr_deck);
    }
    else{
        show_msg($.Localize('notenoughcard'));
        return;
    }
}

function check_card(card,curr_deck){
    var count = 0;
    for (var i=0;i<curr_deck.cards.length;i++){
        if (allcards[curr_deck.cards[i]].card_id == card){
            count ++;
        }
    }
    return count;
} 

function save_deck(){

    if (curr_deck.cards.length<30){
        show_msg($.Localize('cardlessthan30'));
        return;
    }
    var deck_name = 'default';
    // if (!deck_name){
    //     show_msg($.Localize('decknamerequired'));
    //     return;
    // }

    // 提交修改卡组的请求
    if (curr_deck && curr_deck.id){
        var url = 'http://101.200.189.65:430/dac/deck/mod/@'+local_id +'@deck_1@'+deck_name+'@'+curr_deck.hero+'@'+curr_deck.cards.join(',')+'?hehe='+ Math.random();
        $.AsyncWebRequest(url,{ 
            type: 'GET',
            success: function(a) {
                var object = JSON.parse(a);
                if(object.err == 0){
                    show_msg($.Localize('savesuccess'));
                    Game.EmitSound("ui.trophy_levelup");
                    get_all_cards();
                    OnOpenDeckList();
                    curr_deck = {};
                }
            }
        });
    }
    else{
        // 提交新建卡组的请求
        var url = 'http://101.200.189.65:430/dac/deck/add/@'+local_id +'@'+deck_name+'@'+curr_deck.hero+'@'+curr_deck.cards.join(',')+'?hehe='+ Math.random();
        $.AsyncWebRequest(url,{ 
            type: 'GET',
            success: function(a) {
                var object = JSON.parse(a);
                if(object.err == 0){
                    show_msg($.Localize('savesuccess'));
                    Game.EmitSound("ui.trophy_levelup");
                    get_all_cards();
                    curr_deck = {};
                }
            }
        });
    }
}

function del_deck(){
    if (!curr_deck || !curr_deck.id){
        show_msg($.Localize('error'));
        return;
    }
    var url = 'http://101.200.189.65:430/dac/deck/del/@'+local_id +'@'+curr_deck.id+'?hehe='+ Math.random();
    $.AsyncWebRequest(url,{ 
        type: 'GET',
        success: function(a) {
            var object = JSON.parse(a);
            if(object.err == 0){
                show_msg($.Localize('delsuccess'));
                Game.EmitSound("ui.trophy_new");
                get_all_cards();
                curr_deck = {};
            }
        }
    });
}

function draw_card(card_id){
    var c = ALL_CARDS[card_id];
    if (!c){
        show_msg('未知卡牌，请去js文件添加');
        return;
    }

    Game.EmitSound("InspectorCam.Activate");

    // 填充内容
    $("#draw_card_image").style['background-image'] = "url('file://{resources}/images/custom_game/"+card_id+".png')";
    $("#draw_card_title_bar").style['background-color'] = RARITY_COLOR[parseInt(card_id.substr(1,1))];
    $("#draw_card_title_text").text = c.name;

    var str = '';
    if (card_id.substr(0,1) == 'h'){
        str += '<Image class = "onecardicon" src=""/>';
        str += '<Label class = "onecardtext" text = " "></Label>';
        str += '<Panel class="icon_h"/>';
        str += '<Label class = "onecardtext" text = "'+c.h+'"></Label>';
    }
    else if (card_id.substr(0,1) == 'a'){
        str += '<Image class = "onecardicon" src=""/>';
        str += '<Label class = "onecardtext" text = " "></Label>';
        str += '<Panel class="icon_m"/>';
        str += '<Label class = "onecardtext" text = "'+c.c+'"></Label>';
    }
    else{
        str += '<Panel class="icon_m"/>';
        str += '<Label class = "onecardtext" text = "'+c.c+'"></Label>';
        str += '<Panel class="icon_a"/>';
        str += '<Label class = "onecardtext" text = "'+c.a+'"></Label>';
        str += '<Panel class="icon_h"/>';
        str += '<Label class = "onecardtext" text = "'+c.h+'"></Label>';
    }

    $("#draw_card_onecardinfo").RemoveAndDeleteChildren();
    $('#draw_card_onecardinfo').BCreateChildren(str);

    $("#draw_card_desc").text = c.desc;

    $("#draw_card").style['position'] = '0px 0px 0px';
    $("#draw_card").style['opacity'] = '1';
    $.Schedule(1.25,function(){
        $("#draw_card").style['position'] = '-740px 0px 0px';
        $("#draw_card").style['opacity'] = '0';
        $.Schedule(0.25,function(){
            $("#draw_card").style['position'] = '0px 0px 0px';
        });
    });
}

function drop_card(card_id){
    var c = ALL_CARDS[card_id];
    if (!c){
        show_msg('???');
        return;
    }

    Game.EmitSound("InspectorCam.Activate");

    // 填充内容
    $("#drop_card_image").style['background-image'] = "url('file://{resources}/images/custom_game/"+card_id+".png')";
    $("#drop_card_title_bar").style['background-color'] = RARITY_COLOR[parseInt(card_id.substr(1,1))];
    $("#drop_card_title_text").text = c.name;

    var str = '';
    if (card_id.substr(0,1) == 'h'){
        str += '<Image class = "onecardicon" src=""/>';
        str += '<Label class = "onecardtext" text = " "></Label>';
        str += '<Panel class="icon_h"/>';
        str += '<Label class = "onecardtext" text = "'+c.h+'"></Label>';
    }
    else if (card_id.substr(0,1) == 'a'){
        str += '<Image class = "onecardicon" src=""/>';
        str += '<Label class = "onecardtext" text = " "></Label>';
        str += '<Panel class="icon_m"/>';
        str += '<Label class = "onecardtext" text = "'+c.c+'"></Label>';
    }
    else{
        str += '<Panel class="icon_m"/>';
        str += '<Label class = "onecardtext" text = "'+c.c+'"></Label>';
        str += '<Panel class="icon_a"/>';
        str += '<Label class = "onecardtext" text = "'+c.a+'"></Label>';
        str += '<Panel class="icon_h"/>';
        str += '<Label class = "onecardtext" text = "'+c.h+'"></Label>';
    }

    $("#drop_card_onecardinfo").RemoveAndDeleteChildren();
    $('#drop_card_onecardinfo').BCreateChildren(str);

    $("#drop_card_desc").text = c.desc;

    $("#drop_card").style['position'] = '60px 0px 0px';
    $("#drop_card").style['opacity'] = '1';
    $.Schedule(1.25,function(){
        $("#drop_card").style['opacity'] = '0';
        $.Schedule(0.25,function(){
            $("#drop_card").style['position'] = '840px 0px 0px';
        });
    });
}


function show_player_icon(mmrs){
    var player_radient = 0;
    var player_dire = 0;

    for (var i=0;i<=5;i++){
        var j = parseInt(i) + 1;
        // $("#panel_player_board"+j).SetHasClass("opacity0",true);
        // $("#player_hero"+j).SetHasClass("invisible",true);
    }

    // 显示玩家头像
    for (var i = 0; i <= 5; i++){
        if (Game.GetPlayerInfo(i)){
            var steam_id = Game.GetPlayerInfo(i).player_steamid;
            var t = Players.GetTeam(i);

            if (t == 2){
                player_radient ++;
                steamid2panelindex[steam_id] = player_radient;
                $('#panel_player_board'+(player_radient)).SetHasClass('opacity0',false); 
                
                $('#avatar_player'+(player_radient)).steamid = steam_id;
                $('#mplayer_name'+(player_radient)).steamid = steam_id;
                
                $('#avatar_player'+(player_radient)).SetHasClass('invisible',false); 
                var h = mmrs[steam_id]['hero'];     
                $('#player_hero'+(player_radient)).SetHasClass('invisible',false);
                $('#player_hero'+(player_radient)).style["background-image"] = "url('file://{images}/custom_game/"+h+".png');";
                if (parseInt(mmrs[steam_id]['match']) >= 10){
                    $('#pic_player_level'+(player_radient)).style["background-image"] = "url('file://{images}/custom_game/level_"+parseInt((parseInt(mmrs[steam_id]['mmr'])-340)/80)+".png');";
                    $('#pic_player_level'+(player_radient)).SetHasClass('invisible',false);
                }
            }
            if (t == 3){
                player_dire ++;
                steamid2panelindex[steam_id] = player_dire+3;
                
                $('#panel_player_board'+(player_dire+3)).SetHasClass('opacity0',false); 
                
                $('#avatar_player'+(player_dire+3)).steamid = steam_id;
                $('#mplayer_name'+(player_dire+3)).steamid = steam_id;

                $('#avatar_player'+(player_dire+3)).SetHasClass('invisible',false); 
                var h = mmrs[steam_id]['hero'];     
                $('#player_hero'+(player_dire+3)).SetHasClass('invisible',false); 
                $('#player_hero'+(player_dire+3)).style["background-image"] = "url('file://{images}/custom_game/"+h+".png');";
                
                if (parseInt(mmrs[steam_id]['match']) >= 10){
                    $('#pic_player_level'+(player_dire+3)).style["background-image"] = "url('file://{images}/custom_game/level_"+parseInt((parseInt(mmrs[steam_id]['mmr'])-340)/80)+".png');";
                    $('#pic_player_level'+(player_dire+3)).SetHasClass('invisible',false);
                }
            }
            player_count ++;
        }
    }
    
}

function choose_hero(card){
    if (!curr_deck || !curr_deck.cards){
        show_msg($.Localize('deckrequired'));
        return;
    }

     // 找出同名的最小的未使用的cardid
    var min_card_id = null;
    for (var i in allcards){
        if (allcards[i].card_id == card && (allcards[i].status == 1 || allcards[i].status == 2) && curr_deck.cards.indexOf(allcards[i].id)<0) {
            if (!min_card_id){
                min_card_id = allcards[i].id;
            }
            else{
                if (parseInt(min_card_id.substr(5))>parseInt(allcards[i].id.substr(5))){
                    min_card_id = allcards[i].id;
                }
            }
        }
    }

    if (min_card_id){
        Game.EmitSound("Item.PickUpGemShop");
        curr_deck.hero = min_card_id;
        show_deck_details(curr_deck);
    }  
}
function close_store(){
    $("#store_panel").SetHasClass("invisible",true);
    $('#store_panel_mask').SetHasClass('invisible',true);
}
var move_cd = false;
var move_forward = null;
var auto_move = false;

function close_score(){
    $('#scorecontainer').style['position'] = '0px -1000px 0px';
}

function delete_card(card){
    $.AsyncWebRequest('http://101.200.189.65:430/dac/card/del/@'+local_id+'@'+card+'?hehe='+ Math.random(),
    {
        type: 'GET',
        success: function(a) {
            var object = JSON.parse(a);
            if(object.err == 0){
                if(object.award){
                    open_panel_award('dac','card','default','1','lucky');
                }
                else{
                    show_msg('删除成功！');
                }
                get_all_cards();
            }
            else{
                show_msg('删除失败！');
            }
        }
    });
    close_confirm();
}




// 集换
function collect_tips_over(pos){
    var tt = pos.split('_');
    var t = collect_ids[tt[3]+'_'+tt[4]];
    if (t){
        $.DispatchEvent( "DOTAShowTextTooltip", $("#"+pos), $.Localize(t+'_name') );
    }
}

function collect_tips_out(){
    $.DispatchEvent( "DOTAHideTextTooltip");
}

function show_one_card(id, c){
    var str = "";
    str += '<Panel class= "onecardimagepanel" >';
    str += '<Panel class = "onecardimage" style="background-image:url(\'file://{resources}/images/custom_game/'+id+'.png\');"/>';
    str += '<Panel class = "onecardname"  style="background-color:'+RARITY_COLOR[parseInt(id.substr(1,1))]+';"><Label text = "'+$.Localize(ALL_CARDS[id].name)+'"></Label></Panel>';
    str += '</Panel>';
    str += '<Panel class = "onecardinfo">';
    if (id.substr(0,1) == 'h'){
        str += '<Image class = "onecardicon" src=""/>';
        str += '<Label class = "onecardtext" text = " "></Label>';
        str += '<Panel class="icon_h"/>';
        str += '<Label class = "onecardtext" text = "'+ALL_CARDS[id].h+'"></Label>';
    }
    else if (id.substr(0,1) == 'a'){
        str += '<Image class = "onecardicon" src=""/>';
        str += '<Label class = "onecardtext" text = " "></Label>';
        str += '<Panel class="icon_m"/>';
        str += '<Label class = "onecardtext" text = "'+ALL_CARDS[id].c+'"></Label>';
    }
    else{
        str += '<Panel class="icon_m"/>';
        str += '<Label class = "onecardtext" text = "'+ALL_CARDS[id].c+'"></Label>';
        str += '<Panel class="icon_a"/>';
        str += '<Label class = "onecardtext" text = "'+ALL_CARDS[id].a+'"></Label>';
        str += '<Panel class="icon_h"/>';
        str += '<Label class = "onecardtext" text = "'+ALL_CARDS[id].h+'"></Label>';
    }
    str += '</Panel>';
    str += '<Panel class = "onecarddesc"><Label text = "'+$.Localize(ALL_CARDS[id].desc)+'"></Label></Panel>';

    $("#"+c).RemoveAndDeleteChildren();
    $('#'+c).BCreateChildren(str);
}


function collect_click(index){
    if (my_collect_ready[index]){
        show_confirm('确认集换 '+$.Localize(collect_id[index])+' ?',"collect_ok('"+collect_id[index]+"')");
    }
    else{
        //mima
        Game.EmitSound("General.CastFail_NoMana");
    }
}

function collect_ok(id){
    $('#confirm_box').SetHasClass('invisible',true);
    var url = 'http://101.200.189.65:430/dac/get/fromcollect/@'+local_id+'@'+id+'?hehe='+ Math.random();
    $.AsyncWebRequest(url,
    {
        type: 'GET',
        success: function(a) {
            var object = JSON.parse(a);

            if(object.err == 0){
                show_msg($.Localize('集换成功!'));
                open_panel_award('dac','card','default',1,'candystore');
                Game.EmitSound("ui.trophy_levelup");
                get_all_cards();
                curr_deck = {};
            }
            else{
                show_msg($.Localize('集换失败>_<'));
            }
        }
    });
}

// 集换列表
var COLLECT_LIST = {
    h104: [ 'h107','h102','h101' ], // 精灵=光法+帕克+小鹿
    h210: [ 'h301','h205','h108' ], // 死灵法=风行+潮汐+拉比克
    h305: [ 'm208','m208','m208','m208','m208','a206' ], // 月之骑士=5个小星月+转生
    h402: [ 'h314','h201','h204' ], // 卡尔=宙斯+冰女+火女

    w301: [ 'w203','w106','a104' ], // 火山=星彩+r+火焰爆轰
    w302: [ 'w204','w104','w201' ], // 中国玉=玉+g+治疗守卫
    w303: [ 'w202','w102','a301' ], // 巨粉=白银+d+神灭斩
    w402: [ 'w205','w205','w205','w306' ], // 炸药桶=3个地雷+静止陷阱

    a207: [ 'w101','w101','w101','w101','w101' ], // 沟壑=5个南瓜
    a204: [ 'm105','m108','m107' ], // 野性召唤=狂暴野猪+小灰熊+不屈战犬
    a305: [ 'm311','m111','m303','m202','m113' ], // 饕餮盛宴=蟹小蜗+树桩+飞僵小宝+小冰龙+骏马
    a401: [ 'h205','w107','w107','w107','w107','w107','a206' ], // 毁灭=潮汐+3个海晶石+转生

    m218: [ 'm215','a101','a101','a101' ], // 翠玉小龙=小白虎+3个洗礼
    m304: [ 'm207','m210','m210','m210' ], // 末日宝宝=迅捷魔童+3个空心南瓜人
    m306: [ 'm101','m102','m211' ], // 摇摆的驴革米=天辉小驴+夜宴小驴+机械战驴
    m309: [ 'm307','m212','m112' ], // 大嘴咬人箱=甲虫咬人箱+铁嘴咬人箱+机械咬人箱
    m405: [ 'm114','w301','a304','a304' ], // 滑板火烈鸟=鹦鹉+火山+2个咆哮
    m408: [ 'm302','m206','a107','a107','a107'], // 伐士奇=达士奇+修补匠宝宝+3个感染
};

var ALL_CARDS = {
    // 英雄卡
    h101: { name:$.Localize('h101_name'), c:0, a:0, h:40, desc:$.Localize('h101_desc') },
    h102: { name:$.Localize('h102_name'), c:0, a:0, h:40, desc:$.Localize('h102_desc') },
    h104: { name:$.Localize('h104_name'), c:0, a:0, h:40, desc:$.Localize('h104_desc') },
    h105: { name:$.Localize('h105_name'), c:0, a:0, h:60, desc:'' },
    h107: { name:$.Localize('h107_name'), c:0, a:0, h:40, desc:$.Localize('h107_desc') },
    h108: { name:$.Localize('h108_name'), c:0, a:0, h:50, desc:$.Localize('h108_desc') },
    h201: { name:$.Localize('h201_name'), c:0, a:0, h:50, desc:$.Localize('h201_desc') },
    h204: { name:$.Localize('h204_name'), c:0, a:0, h:40, desc:$.Localize('h204_desc') },
    h205: { name:$.Localize('h205_name'), c:0, a:0, h:60, desc:$.Localize('h205_desc') },
    h210: { name:$.Localize('h210_name'), c:0, a:0, h:50, desc:$.Localize('h210_desc') },
    h301: { name:$.Localize('h301_name'), c:0, a:0, h:40, desc:$.Localize('h301_desc') },
    h303: { name:$.Localize('h303_name'), c:0, a:0, h:40, desc:$.Localize('h303_desc') },
    h305: { name:$.Localize('h305_name'), c:0, a:0, h:50, desc:$.Localize('h305_desc') },
    h306: { name:$.Localize('h306_name'), c:0, a:0, h:50, desc:$.Localize('h306_desc') },
    h314: { name:$.Localize('h314_name'), c:0, a:0, h:50, desc:$.Localize('h314_desc') },
    h402: { name:$.Localize('h402_name'), c:0, a:0, h:50, desc:$.Localize('h402_desc') },
    h403: { name:$.Localize('h403_name'), c:0, a:0, h:80, desc:$.Localize('h403_desc') },

    // 守卫卡
    w101: { name:$.Localize('w101_name'), c:1, a:0, h:30, desc:$.Localize('w101_desc') },
    w102: { name:$.Localize('w102_name'), c:1, a:2, h:20, desc:$.Localize('w102_desc') },
    w103: { name:$.Localize('w103_name'), c:1, a:1, h:20, desc:$.Localize('w103_desc') },
    w104: { name:$.Localize('w104_name'), c:1, a:1, h:20, desc:$.Localize('w104_desc') },
    w105: { name:$.Localize('w105_name'), c:1, a:1, h:20, desc:$.Localize('w105_desc') },
    w106: { name:$.Localize('w106_name'), c:1, a:1, h:20, desc:$.Localize('w106_desc') },
    w107: { name:$.Localize('w107_name'), c:1, a:1, h:20, desc:$.Localize('w107_desc') },
    w108: { name:$.Localize('w108_name'), c:1, a:1, h:20, desc:$.Localize('w108_desc') },
    w109: { name:$.Localize('w109_name'), c:1, a:1, h:20, desc:$.Localize('w109_desc') },
    w201: { name:$.Localize('w201_name'), c:4, a:0, h:35, desc:$.Localize('w201_desc') },
    w202: { name:$.Localize('w202_name'), c:3, a:2, h:35, desc:$.Localize('w202_desc') },
    w203: { name:$.Localize('w203_name'), c:3, a:0, h:40, desc:$.Localize('w203_desc') },
    w204: { name:$.Localize('w204_name'), c:4, a:2, h:40, desc:$.Localize('w204_desc') },
    w205: { name:$.Localize('w205_name'), c:4, a:0, h:1, desc:$.Localize('w205_desc') },
    w301: { name:$.Localize('w301_name'), c:7, a:0, h:40, desc:$.Localize('w301_desc') },
    w302: { name:$.Localize('w302_name'), c:6, a:2, h:50, desc:$.Localize('w302_desc') },
    w303: { name:$.Localize('w303_name'), c:8, a:4, h:50, desc:$.Localize('w303_desc') },
    w304: { name:$.Localize('w304_name'), c:9, a:3, h:50, desc:$.Localize('w304_desc') },
    w305: { name:$.Localize('w305_name'), c:6, a:1, h:50, desc:$.Localize('w305_desc') },
    w306: { name:$.Localize('w306_name'), c:3, a:0, h:1, desc:$.Localize('w306_desc') },
    w401: { name:$.Localize('w401_name'), c:7, a:6, h:50, desc:$.Localize('w401_desc') },
    w402: { name:$.Localize('w402_name'), c:10, a:0, h:1, desc:$.Localize('w402_desc') },

    // 法术卡
    a101: { name:$.Localize('a101_name'), c:3, a:0, h:0, desc:$.Localize('a101_desc') },
    a102: { name:$.Localize('a102_name'), c:2, a:0, h:0, desc:$.Localize('a102_desc') },
    a103: { name:$.Localize('a103_name'), c:3, a:0, h:0, desc:$.Localize('a103_desc') },
    a104: { name:$.Localize('a104_name'), c:3, a:0, h:0, desc:$.Localize('a104_desc') },
    a105: { name:$.Localize('a105_name'), c:3, a:0, h:0, desc:$.Localize('a105_desc') },
    a106: { name:$.Localize('a106_name'), c:4, a:0, h:0, desc:$.Localize('a106_desc') },
    a107: { name:$.Localize('a107_name'), c:4, a:0, h:0, desc:$.Localize('a107_desc') },
    a108: { name:$.Localize('a108_name'), c:5, a:0, h:0, desc:$.Localize('a108_desc') },
    a109: { name:$.Localize('a109_name'), c:1, a:0, h:0, desc:$.Localize('a109_desc') },
    a201: { name:$.Localize('a201_name'), c:1, a:0, h:0, desc:$.Localize('a201_desc') },
    a202: { name:$.Localize('a202_name'), c:2, a:0, h:0, desc:$.Localize('a202_desc') },
    a203: { name:$.Localize('a203_name'), c:2, a:0, h:0, desc:$.Localize('a203_desc') },
    a204: { name:$.Localize('a204_name'), c:8, a:0, h:0, desc:$.Localize('a204_desc') },
    a205: { name:$.Localize('a205_name'), c:1, a:0, h:0, desc:$.Localize('a205_desc') },
    a206: { name:$.Localize('a206_name'), c:2, a:0, h:0, desc:$.Localize('a206_desc') },
    a207: { name:$.Localize('a207_name'), c:5, a:0, h:0, desc:$.Localize('a207_desc') },
    a301: { name:$.Localize('a301_name'), c:10, a:0, h:0, desc:$.Localize('a301_desc') },
    a302: { name:$.Localize('a302_name'), c:1, a:0, h:0, desc:$.Localize('a302_desc') },
    a303: { name:$.Localize('a303_name'), c:1, a:0, h:0, desc:$.Localize('a303_desc') },
    a304: { name:$.Localize('a304_name'), c:3, a:0, h:0, desc:$.Localize('a304_desc') },
    a305: { name:$.Localize('a305_name'), c:10, a:0, h:0, desc:$.Localize('a305_desc') },
    a306: { name:$.Localize('a306_name'), c:4, a:0, h:0, desc:$.Localize('a306_desc') },
    a401: { name:$.Localize('a401_name'), c:9, a:0, h:0, desc:$.Localize('a401_desc') },
    a402: { name:$.Localize('a402_name'), c:2, a:0, h:0, desc:$.Localize('a402_desc') },
    a403: { name:$.Localize('a403_name'), c:3, a:0, h:0, desc:$.Localize('a403_desc') },
    a404: { name:$.Localize('a404_name'), c:8, a:0, h:0, desc:$.Localize('a404_desc') },
    a405: { name:$.Localize('a405_name'), c:4, a:0, h:0, desc:$.Localize('a405_desc') },

    // 随从卡
    m101: { name:$.Localize('m101_name'), c:1, a:1, h:15, desc:'' },
    m102: { name:$.Localize('m102_name'), c:1, a:2, h:10, desc:'' },
    m103: { name:$.Localize('m103_name'), c:1, a:1, h:10, desc:$.Localize('m103_desc') },
    m104: { name:$.Localize('m104_name'), c:4, a:3, h:35, desc:$.Localize('m104_desc') },
    m105: { name:$.Localize('m105_name'), c:2, a:3, h:10, desc:$.Localize('m105_desc') },
    m106: { name:$.Localize('m106_name'), c:2, a:2, h:15, desc:$.Localize('m106_desc') },
    m107: { name:$.Localize('m107_name'), c:3, a:4, h:20, desc:$.Localize('m107_desc')},
    m108: { name:$.Localize('m108_name'), c:6, a:4, h:50, desc:$.Localize('m108_desc')},
    m109: { name:$.Localize('m109_name'), c:2, a:1, h:15, desc:$.Localize('m109_desc')},
    m110: { name:$.Localize('m110_name'), c:3, a:1, h:25, desc:$.Localize('m110_desc')},
    m111: { name:$.Localize('m111_name'), c:2, a:1, h:25, desc:$.Localize('m111_desc')},
    m112: { name:$.Localize('m112_name'), c:4, a:2, h:25, desc:$.Localize('m112_desc')},
    m113: { name:$.Localize('m113_name'), c:4, a:2, h:25, desc:$.Localize('m113_desc')},
    m114: { name:$.Localize('m114_name'), c:2, a:3, h:15, desc:$.Localize('')},
    m201: { name:$.Localize('m201_name'), c:8, a:6, h:60, desc:'' },
    m202: { name:$.Localize('m202_name'), c:3, a:2, h:20, desc:$.Localize('m202_desc') },
    m203: { name:$.Localize('m203_name'), c:1, a:1, h:15, desc:$.Localize('m203_desc') },
    m204: { name:$.Localize('m204_name'), c:3, a:2, h:20, desc:$.Localize('m204_desc') },
    m205: { name:$.Localize('m205_name'), c:2, a:1, h:10, desc:$.Localize('m205_desc')},
    m206: { name:$.Localize('m206_name'), c:3, a:1, h:10, desc:$.Localize('m206_desc')},
    m207: { name:$.Localize('m207_name'), c:2, a:3, h:15, desc:$.Localize('m207_desc')},
    m208: { name:$.Localize('m208_name'), c:4, a:3, h:25, desc:$.Localize('m208_desc')},
    m209: { name:$.Localize('m209_name'), c:6, a:6, h:45, desc:$.Localize('m209_desc')},
    m210: { name:$.Localize('m210_name'), c:2, a:2, h:10, desc:$.Localize('m210_desc')},
    m211: { name:$.Localize('m211_name'), c:3, a:3, h:15, desc:$.Localize('m211_desc')},
    m212: { name:$.Localize('m212_name'), c:5, a:2, h:25, desc:$.Localize('m212_desc')},
    m213: { name:$.Localize('m213_name'), c:2, a:2, h:10, desc:$.Localize('m213_desc')},
    m214: { name:$.Localize('m214_name'), c:5, a:5, h:25, desc:$.Localize('m214_desc')},
    m215: { name:$.Localize('m215_name'), c:6, a:4, h:40, desc:$.Localize('m215_desc')},
    m216: { name:$.Localize('m216_name'), c:5, a:2, h:40, desc:$.Localize('m216_desc')},
    m217: { name:$.Localize('m217_name'), c:7, a:4, h:50, desc:$.Localize('m217_desc')},
    m218: { name:$.Localize('m218_name'), c:6, a:3, h:45, desc:$.Localize('m218_desc')},
    m301: { name:$.Localize('m301_name'), c:4, a:6, h:10, desc:$.Localize('m301_desc') },
    m302: { name:$.Localize('m302_name'), c:2, a:2, h:15, desc:$.Localize('m302_desc')},
    m303: { name:$.Localize('m303_name'), c:4, a:1, h:10, desc:$.Localize('m303_desc')},
    m304: { name:$.Localize('m304_name'), c:4, a:5, h:35, desc:$.Localize('m304_desc')},
    m305: { name:$.Localize('m305_name'), c:4, a:3, h:25, desc:$.Localize('m305_desc')},
    m306: { name:$.Localize('m306_name'), c:6, a:2, h:30, desc:$.Localize('m306_desc')},
    m307: { name:$.Localize('m307_name'), c:6, a:3, h:45, desc:$.Localize('m307_desc')},
    m308: { name:$.Localize('m308_name'), c:5, a:4, h:20, desc:$.Localize('m308_desc')},
    m309: { name:$.Localize('m309_name'), c:10, a:4, h:50, desc:$.Localize('m309_desc')},
    m310: { name:$.Localize('m310_name'), c:6, a:4, h:20, desc:$.Localize('m310_desc')},
    m311: { name:$.Localize('m311_name'), c:5, a:3, h:40, desc:$.Localize('m311_desc')},
    m312: { name:$.Localize('m312_name'), c:4, a:3, h:15, desc:$.Localize('m312_desc')},
    m313: { name:$.Localize('m313_name'), c:9, a:6, h:80, desc:$.Localize('m313_desc')},
    m401: { name:$.Localize('m401_name'), c:6, a:3, h:30, desc:$.Localize("m401_desc")},
    m402: { name:$.Localize('m402_name'), c:10, a:5, h:45, desc:$.Localize("m402_desc")},
    m403: { name:$.Localize('m403_name'), c:4, a:1, h:5, desc:$.Localize('m403_desc')},
    m404: { name:$.Localize('m404_name'), c:5, a:5, h:25, desc:$.Localize('m404_desc')},
    m405: { name:$.Localize('m405_name'), c:7, a:5, h:35, desc:$.Localize('m405_desc')},
    m406: { name:$.Localize('m406_name'), c:8, a:4, h:60, desc:$.Localize('m406_desc')},
    m407: { name:$.Localize('m407_name'), c:9, a:4, h:30, desc:$.Localize('m407_desc')},
    m408: { name:$.Localize('m408_name'), c:4, a:2, h:40, desc:$.Localize('m408_desc')},
    m409: { name:$.Localize('m409_name'), c:7, a:4, h:60, desc:$.Localize('m409_desc')},
    m410: { name:$.Localize('m410_name'), c:4, a:2, h:25, desc:$.Localize('m410_desc')},
};