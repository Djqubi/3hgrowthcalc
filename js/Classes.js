//Classes.js

/* Unique Classes */
var noble = {
    name: "Noble",
    hp: 0,
    str: 0,
    mag: 0,
    dex: 0,
    spd: 0,
    lck: 0,
    def: 0,
    res: 0,
    cha: 5,
}

var commoner = {
    name: "Commoner",
    hp: 0,
    str: 0,
    mag: 0,
    dex: 0,
    spd: 0,
    lck: 0,
    def: 0,
    res: 0,
    cha: 0,
}

var dancer = {
    name: "Dancer",
    hp: 20,
    str: -5,
    mag: 0,
    dex: 0,
    spd: 0,
    lck: 0,
    def: -5,
    res: -5,
    cha: 10,
}

/* Beginner Classes */

var myrmidon = {
    name: "Myrmidon",
    hp: 10,
    str: 0,
    mag: 0,
    dex: 0,
    spd: 5,
    lck: 0,
    def: 0,
    res: -5,
    cha: 5,
}

var soldier = {
    name: "Soldier",
    hp: 10,
    str: 0,
    mag: 0,
    dex: 5,
    spd: 0,
    lck: 0,
    def: 0,
    res: -5,
    cha: 5,
}

var fighter = {
    name: "Fighter",
    hp: 10,
    str: 5,
    mag: 0,
    dex: 0,
    spd: 0,
    lck: 0,
    def: 0,
    res: -5,
    cha: 5,
}

var monk = {
    name: "Monk",
    hp: 5,
    str: 0,
    mag: 0,
    dex: 0,
    spd: 0,
    lck: 0,
    def: 0,
    res: 5,
    cha: 5,
}

/* Intermediate Classes */

var lord = {
    name: "Lord",
    hp: 20,
    str: 0,
    mag: 0,
    dex: 10,
    spd: 0,
    lck: 0,
    def: 0,
    res: 0,
    cha: 10,
}

var mercenary = {
    name: "Mercenary",
    hp: 20,
    str: 5,
    mag: 0,
    dex: 0,
    spd: 5,
    lck: 0,
    def: 0,
    res: -5,
    cha: 5,
}

var thief = {
    name: "Thief",
    hp: 20,
    str: 0,
    mag: 0,
    dex: 10,
    spd: 10,
    lck: 0,
    def: 0,
    res: 0,
    cha: 5,
}

var armored_knight = {
    name: "Armored Knight",
    hp: 20,
    str: 0,
    mag: 0,
    dex: 0,
    spd: -10,
    lck: 0,
    def: 10,
    res: -5,
    cha: 5,
}

var cavalier = {
    name: "Cavalier",
    hp: 20,
    str: 5,
    mag: 0,
    dex: 5,
    spd: -10,
    lck: 0,
    def: 5,
    res: 0,
    cha: 5,
}

var brigand = {
    name: "Brigand",
    hp: 30,
    str: 10,
    mag: 0,
    dex: 0,
    spd: 0,
    lck: 0,
    def: 0,
    res: -5,
    cha: 5,
}

var archer = {
    name: "Archer",
    hp: 5,
    str: 0,
    mag: 0,
    dex: 10,
    spd: 0,
    lck: 5,
    def: 0,
    res: 0,
    cha: 5,
}

var brawler = {
    name: "Brawler",
    hp: 30,
    str: 0,
    mag: -10,
    dex: 10,
    spd: 10,
    lck: 0,
    def: 0,
    res: -10,
    cha: 5,
}

var mage = {
    name: "Mage",
    hp: 5,
    str: -5,
    mag: 10,
    dex: 5,
    spd: 0,
    lck: 0,
    def: -5,
    res: 5,
    cha: 5,
}

var dark_mage = {
    name: "Dark Mage",
    hp: 5,
    str: -5,
    mag: 10,
    dex: 5,
    spd: 0,
    lck: 0,
    def: -5,
    res: 5,
    cha: 0,
}

var priest = {
    name: "Priest",
    hp: 5,
    str: -5,
    mag: 5,
    dex: 5,
    spd: 0,
    lck: 0,
    def: -5,
    res: 10,
    cha: 10,
}

var pegasus_knight = {
    name: "Pegasus Knight",
    hp: 15,
    str: 0,
    mag: 0,
    dex: 0,
    spd: 10,
    lck: 0,
    def: 0,
    res: 5,
    cha: 10,
}

/* Advanced Classes */

var armored_lord = {
    name: "Armored Lord",
    hp: 20,
    str: 5,
    mag: 5,
    dex: 0,
    spd: 0,
    lck: 0,
    def: 5,
    res: 5,
    cha: 10,
}

var high_lord = {
    name: "High Lord",
    hp: 20,
    str: 5,
    mag: 0,
    dex: 5,
    spd: 0,
    lck: 0,
    def: 5,
    res: 0,
    cha: 10,
}

var wyvern_master = {
    name: "Wyvern Master",
    hp: 20,
    str: 10,
    mag: 0,
    dex: 0,
    spd: 5,
    lck: 0,
    def: 5,
    res: 0,
    cha: 10,
}

var hero = {
    name: "Hero",
    hp: 30,
    str: 10,
    mag: 0,
    dex: 0,
    spd: 10,
    lck: 0,
    def: 0,
    res: -5,
    cha: 5,
}

var swordmaster = {
    name: "Swordmaster",
    hp: 25,
    str: 10,
    mag: 0,
    dex: 0,
    spd: 20,
    lck: 0,
    def: 0,
    res: -5,
    cha: 5,
}

var assassin = {
    name: "Assassin",
    hp: 20,
    str: 0,
    mag: 0,
    dex: 20,
    spd: 20,
    lck: 0,
    def: 0,
    res: 0,
    cha: 0,
}

var fortress_knight = {
    name: "Fortress Knight",
    hp: 30,
    str: 10,
    mag: 0,
    dex: 0,
    spd: -10,
    lck: 0,
    def: 15,
    res: 0,
    cha: 5,
}

var paladin = {
    name: "Paladin",
    hp: 30,
    str: 10,
    mag: 0,
    dex: 5,
    spd: -10,
    lck: 5,
    def: 5,
    res: 5,
    cha: 5,
}

var wyvern_rider = {
    name: "Wyvern Rider",
    hp: 30,
    str: 10,
    mag: -5,
    dex: 0,
    spd: 0,
    lck: 0,
    def: 5,
    res: -5,
    cha: 5,
}

var warrior = {
    name: "Warrior",
    hp: 40,
    str: 15,
    mag: -5,
    dex: 0,
    spd: 0,
    lck: 0,
    def: 0,
    res: 0,
    cha: 5,
}

var sniper = {
    name: "Sniper",
    hp: 10,
    str: 5,
    mag: 0,
    dex: 20,
    spd: 0,
    lck: 10,
    def: 0,
    res: 0,
    cha: 5,
}

var grappler = {
    name: "Grappler",
    hp: 40,
    str: 10,
    mag: 0,
    dex: 10,
    spd: 10,
    lck: 0,
    def: 0,
    res: 0,
    cha: 5,
}

var warlock = {
    name: "Warlock",
    hp: 10,
    str: 0,
    mag: 10,
    dex: 0,
    spd: 0,
    lck: 0,
    def: -5,
    res: 5,
    cha: 5,
}

var dark_bishop = {
    name: "Dark Bishop",
    hp: 10,
    str: 0,
    mag: 10,
    dex: 0,
    spd: 0,
    lck: 0,
    def: -5,
    res: 5,
    cha: 0,
}

var bishop = {
    name: "Bishop",
    hp: 10,
    str: 0,
    mag: 10,
    dex: 0,
    spd: 0,
    lck: 10,
    def: -5,
    res: 5,
    cha: 10,
}

/* Master Classes */

var enlightened_one = {
    name: "Enlightened One",
    hp: 20,
    str: 10,
    mag: 10,
    dex: 0,
    spd: 0,
    lck: 0,
    def: 5,
    res: 0,
    cha: 5,
}

var emperor = {
    name: "Emperor",
    hp: 30,
    str: 10,
    mag: 10,
    dex: 0,
    spd: 0,
    lck: 0,
    def: 5,
    res: 5,
    cha: 10,
}

var great_lord = {
    name: "Great Lord",
    hp: 30,
    str: 10,
    mag: 0,
    dex: 10,
    spd: 0,
    lck: 0,
    def: 5,
    res: 0,
    cha: 10,
}

var barbarossa = {
    name: "Barbarossa",
    hp: 30,
    str: 15,
    mag: 0,
    dex: 0,
    spd: 10,
    lck: 0,
    def: 0,
    res: 0,
    cha: 10,
}

var falcon_knight = {
    name: "Falcon Knight",
    hp: 30,
    str: 10,
    mag: 0,
    dex: 0,
    spd: 20,
    lck: 0,
    def: 0,
    res: 5,
    cha: 10,
}

var wyvern_lord = {
    name: "Wyvern Lord",
    hp: 30,
    str: 15,
    mag: -5,
    dex: 0,
    spd: 10,
    lck: 0,
    def: 5,
    res: 0,
    cha: 5,
}

var mortal_savant = {
    name: "Mortal Savant",
    hp: 20,
    str: 10,
    mag: 10,
    dex: 0,
    spd: -10,
    lck: 10,
    def: 0,
    res: 0,
    cha: 5,
}

var great_knight = {
    name: "Great Knight",
    hp: 30,
    str: 10,
    mag: 0,
    dex: 0,
    spd: -10,
    lck: 0,
    def: 5,
    res: -5,
    cha: 5,
}

var bow_knight = {
    name: "Bow Knight",
    hp: 10,
    str: 0,
    mag: 0,
    dex: 0,
    spd: -5,
    lck: 0,
    def: 0,
    res: 0,
    cha: 5,
}

var dark_knight = {
    name: "Dark Knight",
    hp: 10,
    str: 5,
    mag: 10,
    dex: 0,
    spd: -5,
    lck: 0,
    def: 5,
    res: 10,
    cha: 5,
}

var holy_knight = {
    name: "Holy Knight",
    hp: 10,
    str: 0,
    mag: 10,
    dex: 0,
    spd: -5,
    lck: 10,
    def: 5,
    res: 10,
    cha: 10,
}

var war_master = {
    name: "War Master",
    hp: 40,
    str: 15,
    mag: 0,
    dex: 0,
    spd: 10,
    lck: 0,
    def: 0,
    res: 0,
    cha: 5,
}

var gremory = {
    name: "Gremory",
    hp: 10,
    str: 0,
    mag: 10,
    dex: 10,
    spd: 0,
    lck: 0,
    def: 0,
    res: 5,
    cha: 10,
}

var allClasses = [noble,commoner,dancer,myrmidon,soldier,fighter,monk,lord,mercenary,thief,armored_knight,cavalier,brigand,archer,brawler,mage,dark_mage,priest,pegasus_knight,armored_lord,high_lord,wyvern_master,hero,swordmaster,assassin,fortress_knight,paladin,wyvern_rider,warrior,sniper,grappler,warlock,dark_bishop,bishop,enlightened_one,emperor,great_lord,barbarossa,falcon_knight,wyvern_lord,mortal_savant,great_knight,bow_knight,dark_knight,holy_knight,war_master,gremory];

//Accepts class object and returns array of unit's growth rates
function getGrowthRates(classes) {
    return [classes.hp, classes.str, classes.mag, classes.dex, classes.spd, classes.lck, classes.def, classes.res, classes.cha];
}
