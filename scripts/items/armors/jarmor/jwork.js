function changeLink() { 
name = document.getElementById('name').value;
armor = document.getElementById('armor').value;

var weight = [];
var reqstr = [];
var resources = [];
var skillmake = [];
for (i = 1; i < 7; i++) {
	weight[i] = document.getElementById('weight'+[i]+'').value;
	reqstr[i] = document.getElementById('reqstr'+[i]+'').value;
	resources[i] = document.getElementById('resources'+[i]+'').value;
	skillmake[i] = document.getElementById('skillmake'+[i]+'').value;
}

var now = new Date();
var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var today = (day)+"." +(month)+'.'+now.getFullYear();
document.getElementById('work').innerHTML='\
// '+today+' - mon jeu<br>\
<br>\
[itemdef i_platemail_arms_'+name+']<br>\
id = i_platemail_arms<br>\
name = '+name+' platemail arms<br>\
armor = '+armor+'<br>\
weight = '+weight[1]+'<br>\
reqstr = '+reqstr[1]+'<br>\
resources = i_ingot_gold '+resources[1]+'<br>\
skillmake = blacksmithing '+skillmake[1]+'<br>\
<br>\
[itemdef i_platemail_leggings_'+name+']<br>\
id = i_platemail_leggings<br>\
name = '+name+' platemail leggings<br>\
armor = '+armor+'<br>\
weight = '+weight[2]+'<br>\
reqstr = '+reqstr[2]+'<br>\
resources = i_ingot_gold '+resources[2]+'<br>\
skillmake = blacksmithing '+skillmake[2]+'<br>\
<br>\
[itemdef i_platemail_helm_'+name+']<br>\
id = i_platemail_helm<br>\
name = '+name+' platemail helm<br>\
armor = '+armor+'<br>\
weight = '+weight[3]+'<br>\
reqstr = '+reqstr[3]+'<br>\
resources = i_ingot_gold '+resources[3]+'<br>\
skillmake = blacksmithing '+skillmake[3]+'<br>\
<br>\
[itemdef i_platemail_gorget_'+name+']<br>\
id = i_platemail_gorget<br>\
name = '+name+' platemail gorget<br>\
armor = '+armor+'<br>\
weight = '+weight[4]+'<br>\
reqstr = '+reqstr[4]+'<br>\
resources = i_ingot_gold '+resources[4]+'<br>\
skillmake = blacksmithing '+skillmake[4]+'<br>\
<br>\
[itemdef i_platemail_gloves_'+name+']<br>\
id = i_platemail_gloves<br>\
name = '+name+' platemail gloves<br>\
armor = '+armor+'<br>\
weight = '+weight[5]+'<br>\
reqstr = '+reqstr[5]+'<br>\
resources = i_ingot_gold '+resources[5]+'<br>\
skillmake = blacksmithing '+skillmake[5]+'<br>\
<br>\
[itemdef i_platemail_chest_'+name+']<br>\
id = i_platemail_chest<br>\
name = '+name+' platemail chest<br>\
armor = '+armor+'<br>\
weight = '+weight[6]+'<br>\
reqstr = '+reqstr[6]+'<br>\
resources = i_ingot_gold '+resources[6]+'<br>\
skillmake = blacksmithing '+skillmake[6]+'<br>\
<br>\
[eof]\
';
}