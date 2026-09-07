/* Retro Console Checker database v2 — UK/PAL-first. Data is deliberately conservative: model codes and distinctions are included where reasonably documented; ambiguous board-level claims are avoided. */
window.CONSOLE_DB_V2 = {
meta:{version:"2.0",focus:"UK/PAL-first",updated:"2026-09-07",note:"Always identify hardware from the physical model/serial label. Regional variants and internal revisions can differ."},
brands:[
{name:"Sony PlayStation",families:[
{name:"PlayStation (PS1)",shop:"https://retroreplay.uk/collections/playstation",models:[
["SCPH-1002","PlayStation","PAL Europe","Original launch-style chassis","CD-ROM","AV Multi Out; early dedicated AV outputs","Early full-size model; inspect optical drive, lid switch and ports."],
["SCPH-5502","PlayStation","PAL Europe","Full-size","CD-ROM","AV Multi Out","Common mid-generation revision; test disc reading from cold."],
["SCPH-7002","PlayStation","PAL Europe","Full-size","CD-ROM","AV Multi Out","Later full-size revision; check spindle and laser consistency."],
["SCPH-7502","PlayStation","PAL Europe","Full-size","CD-ROM","AV Multi Out","Late revision; verify exact label and controller/memory ports."],
["SCPH-9002","PlayStation","PAL Europe","Full-size","CD-ROM","AV Multi Out","Late full-size revision; parallel I/O removed."],
["SCPH-102","PS one","PAL Europe","Compact redesign","CD-ROM","AV Multi Out","Compact model with external DC adaptor; verify correct PSU."]]},
{name:"PlayStation 2",shop:"https://retroreplay.uk/collections/playstation",models:[
["SCPH-30003","PlayStation 2 Fat","PAL UK","Fat / expansion bay","DVD-ROM + CD-ROM","AV Multi Out; optical audio","Early UK Fat. Expansion bay present; test CD and DVD media."],
["SCPH-30004","PlayStation 2 Fat","PAL Europe","Fat / expansion bay","DVD-ROM + CD-ROM","AV Multi Out; optical audio","European Fat family; exact suffix identifies market."],
["SCPH-35003","PlayStation 2 Fat","PAL UK","Fat / expansion bay","DVD-ROM + CD-ROM","AV Multi Out; optical audio","Early Fat family variant; check optical drive and tray."],
["SCPH-39003","PlayStation 2 Fat","PAL UK","Fat / expansion bay","DVD-ROM + CD-ROM","AV Multi Out; optical audio","Well-known Fat revision; inspect fan, tray and disc reading."],
["SCPH-39004","PlayStation 2 Fat","PAL Europe","Fat / expansion bay","DVD-ROM + CD-ROM","AV Multi Out; optical audio","European counterpart in 3900x family."],
["SCPH-50003","PlayStation 2 Fat","PAL UK","Later Fat / expansion bay","DVD-ROM + CD-ROM","AV Multi Out; optical audio","Later Fat model; expansion bay retained."],
["SCPH-50004","PlayStation 2 Fat","PAL Europe","Later Fat / expansion bay","DVD-ROM + CD-ROM","AV Multi Out; optical audio","European 5000x family; verify region label."],
["SCPH-70003","PlayStation 2 Slim","PAL UK","First Slim / top-loader","DVD-ROM + CD-ROM","AV Multi Out; optical audio","External PSU and built-in Ethernet; no Fat expansion bay."],
["SCPH-70004","PlayStation 2 Slim","PAL Europe","First Slim / top-loader","DVD-ROM + CD-ROM","AV Multi Out; optical audio","European Slim variant; verify PSU and lid sensors."],
["SCPH-75003","PlayStation 2 Slim","PAL UK","Slim","DVD-ROM + CD-ROM","AV Multi Out; optical audio","Compatibility can differ from earlier hardware for some titles."],
["SCPH-75004","PlayStation 2 Slim","PAL Europe","Slim","DVD-ROM + CD-ROM","AV Multi Out; optical audio","European 7500x Slim."],
["SCPH-77003","PlayStation 2 Slim","PAL UK","Slim","DVD-ROM + CD-ROM","AV Multi Out; optical audio","Check laser, lid switches and ribbon condition."],
["SCPH-77004","PlayStation 2 Slim","PAL Europe","Slim","DVD-ROM + CD-ROM","AV Multi Out; optical audio","European 7700x Slim."],
["SCPH-79003","PlayStation 2 Slim","PAL UK","Late Slim","DVD-ROM + CD-ROM","AV Multi Out; optical audio","Light late Slim revision; identify by underside label."],
["SCPH-79004","PlayStation 2 Slim","PAL Europe","Late Slim","DVD-ROM + CD-ROM","AV Multi Out; optical audio","European late Slim."],
["SCPH-90003","PlayStation 2 Slim","PAL UK","Final Slim / internal PSU","DVD-ROM + CD-ROM","AV Multi Out; optical audio","Internal AC supply distinguishes it from many earlier Slims."],
["SCPH-90004","PlayStation 2 Slim","PAL Europe","Final Slim / internal PSU","DVD-ROM + CD-ROM","AV Multi Out; optical audio","Final European Slim family; internal PSU."]]},
{name:"PlayStation 3",shop:"https://retroreplay.uk/collections/playstation",models:[
["CECHC03","PlayStation 3 60GB","UK","Original Fat","Blu-ray / DVD / CD","HDMI; AV Multi Out; optical","Early UK model with selected PS2 compatibility; test heat, drive and HDMI."],
["CECHG03","PlayStation 3 Fat","UK","Fat","Blu-ray / DVD / CD","HDMI; AV Multi Out; optical","Later Fat generation; no PS2 disc compatibility."],
["CECHH03","PlayStation 3 Fat","UK","Fat","Blu-ray / DVD / CD","HDMI; AV Multi Out; optical","Check Blu-ray drive, fan behaviour and wireless functions."],
["CECHK03","PlayStation 3 Fat","UK","Fat","Blu-ray / DVD / CD","HDMI; AV Multi Out; optical","Later Fat family; inspect thermals and optical drive."],
["CECHL03","PlayStation 3 Fat","UK","Fat","Blu-ray / DVD / CD","HDMI; AV Multi Out; optical","Late Fat revision."],
["CECH-2003A","PlayStation 3 Slim","UK","Slim","Blu-ray / DVD / CD","HDMI; AV Multi Out; optical","First Slim generation; no PS2 disc backwards compatibility."],
["CECH-2103A","PlayStation 3 Slim","UK","Slim","Blu-ray / DVD / CD","HDMI; AV Multi Out; optical","Slim revision; check drive, HDMI and Wi-Fi/Bluetooth."],
["CECH-2503A","PlayStation 3 Slim","UK","Slim","Blu-ray / DVD / CD","HDMI; AV Multi Out; optical","Later Slim family."],
["CECH-3003A","PlayStation 3 Slim","UK","Late Slim","Blu-ray / DVD / CD","HDMI; AV Multi Out; optical","Late Slim chassis."],
["CECH-4003A","PlayStation 3 Super Slim","UK","Super Slim / sliding lid","Blu-ray / DVD / CD","HDMI; AV Multi Out; optical","Check sliding disc cover and optical mechanism."],
["CECH-4203A","PlayStation 3 Super Slim","UK","Super Slim","Blu-ray / DVD / CD","HDMI; AV Multi Out; optical","Later Super Slim revision."],
["CECH-4303A","PlayStation 3 Super Slim","UK","Super Slim","Blu-ray / DVD / CD","HDMI; AV Multi Out; optical","Final Super Slim family."]]},
{name:"PSP",shop:"https://retroreplay.uk/collections/playstation",models:[
["PSP-1003","PSP-1000","UK/PAL","Original PSP","UMD","LCD; headphone; USB","Heavier original model; inspect battery, UMD drive and analogue stick."],
["PSP-2003","PSP Slim & Lite","UK/PAL","Slim","UMD","Video-out capable; USB","Slimmer second generation; inspect UMD and battery."],
["PSP-3003","PSP-3000","UK/PAL","Slim","UMD","Video out; USB","Bright-screen revision; check LCD and controls."],
["PSP-N1003","PSP go","UK/PAL","Sliding digital-only handheld","Digital only","Display out; USB proprietary connector","No UMD drive; verify storage, battery and slider."],
["PSP-E1003","PSP Street","UK/PAL","Budget handheld","UMD","LCD; USB","Budget European model; lacks Wi-Fi."]]}]},
{name:"Microsoft Xbox",families:[
{name:"Original Xbox",shop:"https://retroreplay.uk/collections/xbox",models:[
["Revision 1.0","Original Xbox","PAL UK/EU","Large black chassis","Xbox DVD-ROM","Composite/SCART/component via AV pack","Unofficial community revision; GPU fan is a strong 1.0 clue. Inspect clock capacitor and DVD drive."],
["Revision 1.1","Original Xbox","PAL UK/EU","Large black chassis","Xbox DVD-ROM","AV connector","Community revision; motherboard inspection is the reliable identifier."],
["Revision 1.2","Original Xbox","PAL UK/EU","Large black chassis","Xbox DVD-ROM","AV connector","Community revision; do not identify solely from manufacture date."],
["Revision 1.3","Original Xbox","PAL UK/EU","Large black chassis","Xbox DVD-ROM","AV connector","Community revision; internal inspection gives best certainty."],
["Revision 1.4","Original Xbox","PAL UK/EU","Large black chassis","Xbox DVD-ROM","AV connector","Common PAL-era revision; inspect capacitors and optical drive."],
["Revision 1.6","Original Xbox","PAL UK/EU","Large black chassis","Xbox DVD-ROM","AV connector","Late motherboard family; different internal design from earlier revisions."],
["Crystal PAL 1.4","Xbox Crystal Limited Edition","PAL Europe","Translucent crystal shell","Xbox DVD-ROM","AV connector","PAL Crystal units exist across revisions; verify serial/internal board rather than shell alone."],
["Crystal PAL 1.6","Xbox Crystal Limited Edition","PAL Europe","Translucent crystal shell","Xbox DVD-ROM","AV connector","Later Crystal hardware; exact revision requires identification beyond colour."]]},
{name:"Xbox 360",shop:"https://retroreplay.uk/collections/xbox",models:[
["Xenon","Xbox 360","PAL UK/EU","Original white chassis","DVD","Component/composite; no HDMI on earliest Xenon","Early board family; heat-related reliability history makes testing important."],
["Zephyr","Xbox 360","PAL UK/EU","Original chassis","DVD","HDMI + AV","Early HDMI-equipped board family."],
["Falcon","Xbox 360","PAL UK/EU","Original chassis","DVD","HDMI + AV","Later original-shell revision; identify from power rating/connector clues carefully."],
["Jasper","Xbox 360","PAL UK/EU","Original chassis","DVD","HDMI + AV","Generally sought-after late original-shell board family."],
["Trinity","Xbox 360 S","PAL UK/EU","Slim glossy/matte chassis","DVD","HDMI + AV","First major Slim motherboard family."],
["Corona","Xbox 360 S / E","PAL UK/EU","Slim/E family","DVD","HDMI; model dependent AV","Later 360 board family used across S/E variants."],
["Xbox 360 E","Xbox 360 E","PAL UK/EU","Final compact redesign","DVD","HDMI","Final external design; inspect optical drive, storage and PSU."]]}]},
{name:"Nintendo",families:[
{name:"Nintendo Entertainment System",shop:"https://retroreplay.uk/collections/nintendo",models:[
["NES-001 (PAL)","Nintendo Entertainment System","PAL Europe","Front-loading home console","Cartridge","RF / composite","Check 72-pin connector, cartridge loading and controller ports."]]},
{name:"Super Nintendo",shop:"https://retroreplay.uk/collections/nintendo",models:[
["SNSP-001A","Super Nintendo Entertainment System","PAL Europe","Original PAL SNES","Cartridge","RF / Multi Out","Check cartridge connector, video output and yellowing/case condition."]]},
{name:"Nintendo 64",shop:"https://retroreplay.uk/collections/nintendo",models:[
["NUS-001(EUR)","Nintendo 64","PAL Europe","Standard N64","Cartridge","Nintendo Multi Out","Requires Jumper Pak or Expansion Pak; inspect controller stick and cartridge slot."]]},
{name:"GameCube",shop:"https://retroreplay.uk/collections/nintendo",models:[
["DOL-001(EUR)","Nintendo GameCube","PAL Europe","Original GameCube","8cm optical disc","Analogue AV + Digital AV on DOL-001","Digital AV port makes this revision distinct; check drive and lid switches."],
["DOL-101(EUR)","Nintendo GameCube","PAL Europe","Later GameCube","8cm optical disc","Analogue AV","Cost-reduced revision without Digital AV port."]]},
{name:"Wii",shop:"https://retroreplay.uk/collections/nintendo",models:[
["RVL-001(EUR)","Nintendo Wii","PAL Europe","Original vertical/horizontal Wii","Wii optical disc","Nintendo AV Multi Out","GameCube controller/memory ports and GameCube disc support on original family."],
["RVL-101(EUR)","Wii Family Edition","PAL Europe","Horizontal redesign","Wii optical disc","Nintendo AV Multi Out","GameCube hardware compatibility removed; designed for horizontal use."],
["RVL-201(EUR)","Wii mini","PAL Europe","Compact red/black top-loader","Wii optical disc","Composite AV","No GameCube compatibility; reduced connectivity and no online features."]]},
{name:"Game Boy",shop:"https://retroreplay.uk/collections/handheld-consoles",models:[
["DMG-01","Game Boy","UK/EU","Original grey handheld","Game Boy cartridge","160×144 monochrome LCD","Inspect vertical screen lines, battery contacts and speaker."],
["MGB-001","Game Boy Pocket","UK/EU","Compact handheld","Game Boy cartridge","Monochrome LCD","Inspect screen, battery contacts and power switch."],
["CGB-001","Game Boy Color","UK/EU","Colour handheld","Game Boy / Game Boy Color cartridge","Colour LCD","Check cartridge slot, speaker, buttons and battery corrosion."],
["AGB-001","Game Boy Advance","UK/EU","Horizontal handheld","GBA / GB / GBC cartridge","Non-lit colour LCD","Original GBA; screen has no built-in frontlight."],
["AGS-001","Game Boy Advance SP","UK/EU","Clamshell","GBA / GB / GBC cartridge","Front-lit colour LCD","Rechargeable clamshell; inspect hinge and battery."],
["AGS-101","Game Boy Advance SP","UK/EU","Clamshell","GBA / GB / GBC cartridge","Backlit colour LCD","Sought-after brighter backlit SP revision."],
["OXY-001","Game Boy Micro","UK/EU","Micro handheld","GBA cartridge only","Backlit LCD","Does not play original GB/GBC cartridges; inspect faceplate and battery."]]},
{name:"Nintendo DS",shop:"https://retroreplay.uk/collections/handheld-consoles",models:[
["NTR-001","Nintendo DS","UK/EU","Original dual-screen handheld","DS + GBA cartridges","Dual LCD","Has GBA slot; inspect hinges, touch screen and battery."],
["USG-001","Nintendo DS Lite","UK/EU","Slim dual-screen","DS + GBA cartridges","Dual LCD","Popular slim revision; inspect hinge cracks and touch calibration."],
["TWL-001","Nintendo DSi","UK/EU","Camera-equipped handheld","DS cartridge + digital","Dual LCD","GBA cartridge slot removed; adds cameras and SD support."],
["UTL-001","Nintendo DSi XL","UK/EU","Large-screen handheld","DS cartridge + digital","Large dual LCD","Larger DSi; inspect hinge and screens."]]},
{name:"Nintendo 3DS",shop:"https://retroreplay.uk/collections/handheld-consoles",models:[
["CTR-001","Nintendo 3DS","UK/EU","Original 3DS","3DS + DS cartridge","Autostereoscopic upper display","Inspect hinge, circle pad, cameras and screens."],
["SPR-001","Nintendo 3DS XL","UK/EU","Large 3DS","3DS + DS cartridge","Large 3D display","Larger original-generation 3DS."],
["FTR-001","Nintendo 2DS","UK/EU","Slate / non-folding","3DS + DS cartridge","2D displays","No stereoscopic 3D; robust slab design."],
["KTR-001","New Nintendo 3DS","UK/EU","Improved compact 3DS","3DS + DS cartridge","Improved 3D display","New-series hardware with C-stick and extra controls."],
["RED-001","New Nintendo 3DS XL","UK/EU","Large New-series","3DS + DS cartridge","Large improved 3D display","Large New-series model."],
["JAN-001","New Nintendo 2DS XL","UK/EU","Clamshell 2D New-series","3DS + DS cartridge","2D displays","New-series performance without stereoscopic 3D."]]}]},
{name:"SEGA",families:[
{name:"Master System",shop:"https://retroreplay.uk/collections/sega",models:[
["Master System I","SEGA Master System","PAL Europe","Original angular console","Cartridge / Card on applicable model","RF / AV","Check cartridge/card slots, controller ports and PSU."],
["Master System II","SEGA Master System II","PAL Europe","Compact redesign","Cartridge","RF","Cost-reduced redesign; typically RF-focused output."]]},
{name:"Mega Drive",shop:"https://retroreplay.uk/collections/sega",models:[
["Model 1 VA4 PAL","Mega Drive Model 1","PAL","Large Model 1","Cartridge","RGB/composite via AV; headphone stereo","Documented PAL board revision; internal board ID is required for certainty."],
["Model 1 VA6.5 PAL","Mega Drive Model 1","PAL","Large Model 1","Cartridge","RGB/composite via AV; headphone stereo","Common PAL Model 1 revision; EXT port removed."],
["Model 1 VA6.8 PAL","Mega Drive Model 1","PAL","Large Model 1","Cartridge","RGB/composite via AV","PAL-only-ish late Model 1 revision with altered video circuitry."],
["Model 2 VA0 PAL","Mega Drive II","PAL","Compact Model 2","Cartridge","AV Multi Out","Early PAL Model 2 board."],
["Model 2 VA1 PAL","Mega Drive II","PAL","Compact Model 2","Cartridge","AV Multi Out","PAL Model 2 revision."],
["Model 2 VA1.8 PAL","Mega Drive II","PAL","Compact Model 2","Cartridge","AV Multi Out","Documented PAL Model 2 board revision."]]},
{name:"Game Gear",shop:"https://retroreplay.uk/collections/sega",models:[
["HGG-3210","SEGA Game Gear","PAL/International","Colour handheld","Game Gear cartridge","Built-in colour LCD","Original capacitors commonly age; inspect display, audio and power input."]]},
{name:"Saturn",shop:"https://retroreplay.uk/collections/sega",models:[
["MK-80200-50","SEGA Saturn Model 1","PAL","Black Model 1 / oval buttons","CD-ROM","RGB/composite/S-Video capable via AV","Model 1 PAL identifier; disc activity LED and oval buttons are visual clues."],
["MK-80200A-50","SEGA Saturn Model 2","PAL","Black Model 2 / round buttons","CD-ROM","RGB/composite/S-Video capable via AV","Model 2 PAL identifier; round buttons and no access LED."]]},
{name:"Dreamcast",shop:"https://retroreplay.uk/collections/sega",models:[
["HKT-3030","SEGA Dreamcast","PAL Europe","White home console","GD-ROM / CD audio","AV; RGB SCART; VGA support varies by software","Check GD-ROM drive, controller ports, clock battery and fan."]]}]},
{name:"Atari",families:[
{name:"Atari 2600",shop:"https://retroreplay.uk/collections/atari",models:[
["CX2600","Atari Video Computer System / 2600","PAL variants exist","Original woodgrain family","Cartridge","RF","Multiple shell/board revisions exist; identify exact unit from label and switches."],
["CX2600A","Atari 2600","PAL variants exist","Later four-switch family","Cartridge","RF","Later chassis family; inspect switches, cartridge slot and RF output."],
["2600 Jr.","Atari 2600 Junior","PAL Europe","Compact redesign","Cartridge","RF","Late compact redesign; verify PSU and RF tuning."]]},
{name:"Atari 7800",shop:"https://retroreplay.uk/collections/atari",models:[
["PAL 7800","Atari 7800","PAL Europe","Home console","7800 cartridge; regional 2600 compatibility","RF","Check cartridge compatibility by region and controller condition."]]},
{name:"Atari Jaguar",shop:"https://retroreplay.uk/collections/atari",models:[
["Jaguar PAL","Atari Jaguar","PAL Europe","Home console","Jaguar cartridge","RF / AV","Inspect cartridge connector, keypad controller and power supply."]]}]}
],
fields:["model","name","region","form","media","video","notes"]
};