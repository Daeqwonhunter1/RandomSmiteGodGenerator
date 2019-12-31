const {
  Gods,
  Items
} = require('./models');

const main = async () => {
  await Gods.bulkCreate([{
      name: 'Achilles',
      class: 'Warrior',
      pantheon: 'Roman',
      powerType: 'Physical',
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/6/66/SkinArt_Achilles_Default.jpg/250px-SkinArt_Achilles_Default.jpg?version=82632ebe20d25b2eaf91e05811145214"
      
      
    },
    {
      name: "Agni",
      class: "Mage",
      pantheon: "Hindu",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/2/29/SkinArt_Agni_Default.jpg/250px-SkinArt_Agni_Default.jpg?version=e19aefe01d6050daa7025cfea55f4a10  "
    },

    {
      name: "Ah Muzen Cab",
      class: "Hunter",
      pantheon: "Mayan",
      powerType: "Physical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/1/10/SkinArt_AhMuzenCab_Default.jpg/250px-SkinArt_AhMuzenCab_Default.jpg?version=9e19f1a75387173556cdef53cbe8aa66"
    },
    {
      name: "Ah Puch",
      class: "Mage",
      pantheon: "Mayan",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/c/c9/SkinArt_AhPuch_Default.jpg/250px-SkinArt_AhPuch_Default.jpg?version=9c0934acf74b5784097dc7f500d4fa81"
    },

    {
      name: "Amaterasu",
      class: "Warrior",
      pantheon: "Japanese",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/8/8a/SkinArt_Amaterasu_Default.jpg/250px-SkinArt_Amaterasu_Default.jpg?version=efbb3efb4fcb4a2396354a6479ae4e8f"
    },
    {
      name: "Anhur",
      class: "Hunter",
      pantheon: "Egyptian",
      powerType: "Physical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/1/1e/SkinArt_Anhur_Default.jpg/250px-SkinArt_Anhur_Default.jpg?version=7ab22f823125a0e389269215fe79a12d"
    },
    {
      name: "Anubis",
      class: "Mage",
      pantheon: "Egyptian",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/5/59/SkinArt_Anubis_Default.jpg/250px-SkinArt_Anubis_Default.jpg?version=0b02e237abc9e2c26516ad9c6d629c9a"
    },
    {
      name: "Ao Kuang",
      class: "Mage",
      pantheon: "Chinese",
      powerType: "Magical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/3/3b/SkinArt_AoKuang_Default.jpg/250px-SkinArt_AoKuang_Default.jpg?version=ffcf87828dae641413d710e2cf4ed891"
    },
    {
      name: "Aphrodite",
      class: "Mage",
      pantheon: "Greek",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/3/3b/SkinArt_Aphrodite_Default.jpg/250px-SkinArt_Aphrodite_Default.jpg?version=f5ccfdb7b5dfda818992847a07c3df39"
    },
    {
      name: "Apollo",
      class: "Hunter",
      pantheon: "Greek",
      powerType: "Physical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/8/8e/SkinArt_Apollo_Default.jpg/250px-SkinArt_Apollo_Default.jpg?version=38305f4d6cfbe133c542af899b2090db"
    },
    {
      name: "Arachne",
      class: "Assassin",
      pantheon: "Greek",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/a/a8/SkinArt_Arachne_Default.jpg/250px-SkinArt_Arachne_Default.jpg?version=c4a707768bfc446d74d38b5c920a6207"
    },
    {
      name: "Ares",
      class: "Guardian",
      pantheon: "Greek",
      powerType: "Magical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/3/33/SkinArt_Ares_Default.jpg/250px-SkinArt_Ares_Default.jpg?version=dc1afc603d4809317129f51f217462c5"
    },

    {
      name: "Artemis",
      class: "Hunter",
      pantheon: "Greek",
      powerType: "Physical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/5/53/SkinArt_Artemis_Default.jpg/250px-SkinArt_Artemis_Default.jpg?version=35de7da483cbc017de08945faf9e794e"
    },
    {
      name: "Artio",
      class: "Guardian",
      pantheon: "Celtic",
      powerType: "Magical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/4/4c/SkinArt_Artio_Default.jpg/250px-SkinArt_Artio_Default.jpg?version=7f4a73b6541542ce3caad61cfff9d9d7"
    },

    {
      name: "Athena",
      class: "Guardian",
      pantheon: "Greek",
      powerType: "Magical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/d/d7/SkinArt_Athena_Default.jpg/250px-SkinArt_Athena_Default.jpg?version=fd0b6f988649d4471b2ceae35794fcb4"
    },
    {
      name: "Awilix",
      class: "Assassin",
      pantheon: "Mayan",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/0/00/SkinArt_Awilix_Default.jpg/250px-SkinArt_Awilix_Default.jpg?version=422b918b34ddd4c09c9a688248a89448"
    },
    {
      name: "Bacchus",
      class: "Guardian",
      pantheon: "Roman",
      powerType: "Magical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/d/d4/SkinArt_Bacchus_Default_V2.jpg/250px-SkinArt_Bacchus_Default_V2.jpg?version=2df2fd0098038a6038877547b59409e7"
    },
    {
      name: "Bakasura",
      class: "Assassin",
      pantheon: "Hindu",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/f/fd/SkinArt_Bakasura_Default.jpg/250px-SkinArt_Bakasura_Default.jpg?version=ed5cc51a1fd55ed8cc87bc2b234cfb92"
    },
    {
      name: "Baron Samedi",
      class: "Mage",
      pantheon: "Voodoo",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/3/38/SkinArt_BaronSamedi_Default.jpg/250px-SkinArt_BaronSamedi_Default.jpg?version=c8f3cc2d54c1db944180e783c5ab1667"
    },
    {
      name: "Bastet",
      class: "Assassin",
      pantheon: "Egyptian",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/c/c7/SkinArt_Bastet_Default.jpg/250px-SkinArt_Bastet_Default.jpg?version=5ef21a5dcab12f2f63bea80d92d59d07"
    },
    {
      name: "Bellona",
      class: "Warrior",
      pantheon: "Roman",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/a/aa/SkinArt_Bellona_Default.jpg/250px-SkinArt_Bellona_Default.jpg?version=8413014246687d4b2a8c9ce13924151c"
    },
    {
      name: "Cabrakan",
      class: "Guardian",
      pantheon: "Mayan",
      powerType: "Magical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/a/a9/SkinArt_Cabrakan_Default.jpg/250px-SkinArt_Cabrakan_Default.jpg?version=74b3ef1493d77ef78064adb0dc18d717"
    },
    {
      name: "Camazotz",
      class: "Assassin",
      pantheon: "Mayan",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/5/5a/SkinArt_Camazotz_Default.jpg/250px-SkinArt_Camazotz_Default.jpg?version=57cd6679e6b292b4bdfa74f01d3b8feb"
    },
    {
      name: "Cerberus",
      class: "Guardian",
      pantheon: "Greek",
      powerType: "Magical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/d/de/SkinArt_Cerberus_Default.jpg/250px-SkinArt_Cerberus_Default.jpg?version=5f0aeda4640c3409fcb75e7c70d8cee6"
    },
    {
      name: "Cernunnos",
      class: "Hunter",
      pantheon: "Greek",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/f/f0/SkinArt_Cernunnos_Default.jpg/250px-SkinArt_Cernunnos_Default.jpg?version=fa49c7bf709643621230143e7a84e774"
    },
    {
      name: "Chaac",
      class: "Warrior",
      pantheon: "Mayan",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/e/e4/SkinArt_Chaac_Default.jpg/250px-SkinArt_Chaac_Default.jpg?version=128728f47742f192daeba8056a75ceea"
    },
    {
      name: "Chang'e",
      class: "Mage",
      pantheon: "Chinese",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/9/95/SkinArt_ChangE_Default.jpg/250px-SkinArt_ChangE_Default.jpg?version=87d8b010b9f7ed186dac7a334ea8f631"
    },
    {
      name: "Chernobog",
      class: "Hunter",
      pantheon: "Slavic",
      powerType: "Physical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/6/65/SkinArt_Chernobog_Default.jpg/250px-SkinArt_Chernobog_Default.jpg?version=da6306fde637b32f8da74c1618be95fc"
    },
    {
      name: "Chiron",
      class: "Hunter",
      pantheon: "Greek",
      powerType: "Physical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/8/8b/SkinArt_Chiron_Default.jpg/250px-SkinArt_Chiron_Default.jpg?version=6d2922cfcf157d8517d0d12073d8cf6c"
    },
    {
      name: "Chronos",
      class: "Mage",
      pantheon: "Greek",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/a/a8/SkinArt_Chronos_Default.jpg/250px-SkinArt_Chronos_Default.jpg?version=e891da44cee155a96f06b79fbd368676"
    },

    {
      name: "Cu Chulainn",
      class: "Warrior",
      pantheon: "Celtic",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/a/aa/SkinArt_CuChulainn_Default.jpg/250px-SkinArt_CuChulainn_Default.jpg?version=c9fe2a1d085423b7c7509d6e74159667"
    },
    {
      name: "Cupid",  
      class: "Hunter",
      pantheon: "Roman",
      powerType: "Physical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/6/69/SkinArt_Cupid_Default.jpg/250px-SkinArt_Cupid_Default.jpg?version=cc4352aed8b2269d991c27b972d787e1"
    },
    {
      name: "Da Ji",
      class: "Assassin",
      pantheon: "Chinese",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/4/43/SkinArt_DaJi_Default.jpg/250px-SkinArt_DaJi_Default.jpg?version=188acf694e5d0a3bd49f008f4441ae12"
    },
    {
      name: "Discordia",
      class: "Mage",
      pantheon: "Roman",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/5/58/SkinArt_Discordia_Default.jpg/250px-SkinArt_Discordia_Default.jpg?version=03b1559aa80d28309ec7e2f9a44cb9f9"
    },
    {
      name: "Erlang Shen",
      class: "Warrior",
      pantheon: "Chinese",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/0/01/SkinArt_ErlangShen_Default.jpg/250px-SkinArt_ErlangShen_Default.jpg?version=2ec3d62fbab45f1c56d1c8859cfdb673"
    },
    {
      name: "Fafnir",
      class: "Guardian",
      pantheon: "Norse",
      powerType: "Magical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/4/49/SkinArt_Fafnir_Default.jpg/250px-SkinArt_Fafnir_Default.jpg?version=f2b7b61470789175d80fd5790e6c4012"
    },

    {
      name: "Fenrir",
      class: "Assassin",
      pantheon: "Norse",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/6/68/SkinArt_Fenrir_Default.jpg/250px-SkinArt_Fenrir_Default.jpg?version=ee38f9cfcecb5785f34b31e92a7c19b0"
    },

    {
      name: "Freya",
      class: "Mage",
      pantheon: "Norse",
      powerType: "Magical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/c/c9/SkinArt_Freya_Default_V2.jpg/250px-SkinArt_Freya_Default_V2.jpg?version=136f4075870f9926f4c0d4ed148dcc3d"
    },

    {
      name: "Ganesha",
      class: "Guardian",
      pantheon: "Hindu",
      powerType: "Magical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/0/06/SkinArt_Ganesha_Default.jpg/250px-SkinArt_Ganesha_Default.jpg?version=4e53433efc430000834231d4b14aadd6"
    },
    {
      name: "Geb",
      class: "Guardian",
      pantheon: "Egyptian",
      powerType: "Magical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/8/89/SkinArt_Geb_Default.jpg/250px-SkinArt_Geb_Default.jpg?version=3ecbaf4002984e32224fe5ba8d551285"
    },
    {
      name: "Guan Yu",
      class: "Warrior",
      pantheon: "Chinese",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/5/50/SkinArt_GuanYu_Default.jpg/250px-SkinArt_GuanYu_Default.jpg?version=c9170297813625ccdf55014448d32917"
    },

    {
      name: "Hachiman",
      class: "Hunter",
      pantheon: "Japanese",
      powerType: "Physical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/0/0a/SkinArt_Hachiman_Default.jpg/250px-SkinArt_Hachiman_Default.jpg?version=6a8e5f6f1deb5a2d27d61f9c4fff3cd1"
    },
    {
      name: "Hades",
      class: "Mage",
      pantheon: "Greek",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/8/81/SkinArt_Hades_Default.jpg/250px-SkinArt_Hades_Default.jpg?version=754daea1565528095615f1a2362c1bf4"
    },

    {
      name: "He Bo",
      class: "Mage",
      pantheon: "Chinese",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/e/e2/SkinArt_HeBo_Default.jpg/250px-SkinArt_HeBo_Default.jpg?version=15aff65e0a510a877c2609bea7a8fa3e"
    },

    {
      name: "Hel",
      class: "Mage",
      pantheon: "Norse",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/b/b6/SkinArt_Hel_Default.jpg/250px-SkinArt_Hel_Default.jpg?version=5cef241a70f85ef43465d3c1876e8f17"
    },
    {
      name: "Hera",
      class: "Mage",
      pantheon: "Greek",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/2/20/SkinArt_Hera_Default.jpg/250px-SkinArt_Hera_Default.jpg?version=d54b21df2b64a84aa647c29031998455"
    },
    {
      name: "Hercules",
      class: "Warrior",
      pantheon: "Roman",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/d/da/SkinArt_Hercules_Default.jpg/250px-SkinArt_Hercules_Default.jpg?version=b90ff78e2672f0035eddd0993740f18c"
    },
    {
      name: "Horus",
      class: "Warrior",
      pantheon: "Egyptian",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/7/71/SkinArt_Horus_Default.jpg/250px-SkinArt_Horus_Default.jpg?version=3920b454f0f399dc81d4a79720a4c6fa"
    },
    {
      name: "Hou Yi",
      class: "Hunter",
      pantheon: "Chinese",
      powerType: "Physical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/4/4c/SkinArt_HouYi_Default.jpg/250px-SkinArt_HouYi_Default.jpg?version=25cf69faccbae1eed02966c50a752bd2"
    },
    {
      name: "Hun Batz",
      class: "Assassin",
      pantheon: "Mayan",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/5/56/SkinArt_HunBatz_Default.jpg/250px-SkinArt_HunBatz_Default.jpg?version=127108617728dca481fd722c784eb2dd"
    },
    {
      name: "Isis",
      class: "Mage",
      pantheon: "Egyptian",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/0/0a/SkinArt_Isis_Default.jpg/250px-SkinArt_Isis_Default.jpg?version=d1ce1886744e616140adcfa15d29f167"
    },

    {
      name: "Izanami",
      class: "Hunter",
      pantheon: "Japanese",
      powerType: "Physical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/a/aa/SkinArt_Izanami_Default.jpg/250px-SkinArt_Izanami_Default.jpg?version=2a3ae18197ddd073ac8512bf1a507014"
    },
    {
      name: "Janus",
      class: "Mage",
      pantheon: "Roman",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/0/04/SkinArt_Janus_Default.jpg/250px-SkinArt_Janus_Default.jpg?version=b4d5e361dc390f4b15dd8f015bd4d450"
    },

    {
      name: "Jing Wei",
      class: "Hunter",
      pantheon: "Chinese",
      powerType: "Physical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/0/0d/SkinArt_JingWei_Default.jpg/250px-SkinArt_JingWei_Default.jpg?version=6102a1b7e2d3df8ac501d4d2a379fac6"
    },
    {
      name: "Jormungandr",
      class: "Guardian",
      pantheon: "Norse",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/b/bb/SkinArt_Jormungandr_Default.jpg/250px-SkinArt_Jormungandr_Default.jpg?version=9f6b372e69436fd4f0ddebea4880ebcf"
    },
    {
      name: "Kali",
      class: "Assassin",
      pantheon: "Hindu",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/d/d8/SkinArt_Kali_Default.jpg/250px-SkinArt_Kali_Default.jpg?version=07d5105ae7b4bad98cda1da40f2e40d4"
    },
    {
      name: "Khepri",
      class: "Guardian",
      pantheon: "Egyptian",
      powerType: "Magical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/e/e3/SkinArt_Khepri_Default.jpg/250px-SkinArt_Khepri_Default.jpg?version=dd50f137f5777adf98070ff8c76f406b"
    },
    {
      name: "King Arthur",
      class: "Warrior",
      pantheon: "Arthurian",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/6/65/SkinArt_KingArthur_Default.jpg/250px-SkinArt_KingArthur_Default.jpg?version=00a66d634f513c3e7abf56a334344dc9"
    },
    {
      name: "Kukulkan",
      class: "Mage",
      pantheon: "Mayan",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/7/73/SkinArt_Kukulkan_Default.jpg/250px-SkinArt_Kukulkan_Default.jpg?version=5687a9c9d032bc347a08321d4fa91f90"
    },
    {
      name: "Kumbhakarna",
      class: "Guardian",
      pantheon: "Hindu",
      powerType: "Magical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/3/33/SkinArt_Kumbhakarna_Default.jpg/250px-SkinArt_Kumbhakarna_Default.jpg?version=dd2dbcf2a34f7b907cd1b9a8ea79e3a8"
    },
    {
      name: "Kuzenbo",
      class: "Guardian",
      pantheon: "Japanese",
      powerType: "Magical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/d/db/SkinArt_Kuzenbo_Default.jpg/250px-SkinArt_Kuzenbo_Default.jpg?version=05055311f6809266d278762fc7ac0e11"
    },
    {
      name: "Loki",
      class: "Assassin",
      pantheon: "Norse",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/8/88/SkinArt_Loki_Default.jpg/250px-SkinArt_Loki_Default.jpg?version=7b379455fabb693a0b95e0b690c38114"
    },
    {
      name: "Medusa",
      class: "Hunter",
      pantheon: "Greek",
      powerType: "Physical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/0/03/SkinArt_Medusa_Default.jpg/250px-SkinArt_Medusa_Default.jpg?version=5dd0acf83bdb37c90699fcf84aa26556"
    },
    {
      name: "Mercury",
      class: "Assassin",
      pantheon: "Roman",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/6/60/SkinArt_Mercury_Default.jpg/250px-SkinArt_Mercury_Default.jpg?version=ccb92f5a92f4bba4bda1d6f0853ada8f"
    },
    {
      name: "Merlin",
      class: "Mage",
      pantheon: "Arthurian",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/5/59/SkinArt_Merlin_Default.jpg/250px-SkinArt_Merlin_Default.jpg?version=4811c8f9cecdedf4f7312ce511ebd0b2"
    },
    {
      name: "Ne Zha",
      class: "Assassin",
      pantheon: "Chinese",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/d/d4/SkinArt_NeZha_Default.jpg/250px-SkinArt_NeZha_Default.jpg?version=9a6920c09cf424681a1391cebdb77218"
    },
    {
      name: "Neith",
      class: "Hunter",
      pantheon: "Egyptian",
      powerType: "Physical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/5/5b/SkinArt_Neith_Default.jpg/250px-SkinArt_Neith_Default.jpg?version=dedbbb8198bcd0fdc00b2fe0827a6f07"
    },
    {
      name: "Nemesis",
      class: "Assassin",
      pantheon: "Greek",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/c/c3/SkinArt_Nemesis_Default.jpg/250px-SkinArt_Nemesis_Default.jpg?version=500e05a7679fadbf46285b00388622e5"
    },
    {
      name: "Nike",
      class: "Warrior",
      pantheon: "Greek",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/e/eb/SkinArt_Nike_Default.jpg/250px-SkinArt_Nike_Default.jpg?version=6a39e4f30490c966fcfd91a7eb038570"
    },

    {
      name: "Nox",
      class: "Mage",
      pantheon: "Roman",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/e/e1/SkinArt_Nox_Default.jpg/250px-SkinArt_Nox_Default.jpg?version=1f1bbd55ec0aec104c629bc90f8d03b2"
    },
    {
      name: "Nu Wa",
      class: "Mage",
      pantheon: "Chinese",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/c/cd/SkinArt_NuWa_Default.jpg/250px-SkinArt_NuWa_Default.jpg?version=1c96d4e64813197690339e86f29f42ce"
    },
    {
      name: "Odin",
      class: "Warrior",
      pantheon: "Norse",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/1/1e/SkinArt_Odin_Default.jpg/250px-SkinArt_Odin_Default.jpg?version=02083f8555ce2027eb56007e5f0d3841"
    },

    {
      name: "Olorun",
      class: "Mage",
      pantheon: "Yoruba",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/3/3e/SkinArt_Olorun_Default.jpg/250px-SkinArt_Olorun_Default.jpg?version=a2824f364816f39e1ae53b799409cc0e"
    },

    {
      name: "Osiris",
      class: "Warrior",
      pantheon: "Egyptian",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/d/db/SkinArt_Osiris_Default.jpg/250px-SkinArt_Osiris_Default.jpg?version=73fbad462e5cc394b295d4a9acf687f7"
    },
    {
      name: "Pele",
      class: "Assassin",
      pantheon: "Polynesian",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/1/10/SkinArt_Pele_Default.jpg/250px-SkinArt_Pele_Default.jpg?version=ac11d2eced1fe09f16b1d297e043c35e"
    },
    {
      name: "Persephone",
      class: "Mage",
      pantheon: "Greek",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/c/cf/SkinArt_Persephone_Default.jpg/250px-SkinArt_Persephone_Default.jpg?version=5f23953e849e3d6320e5ae2669bac213"
    },
    {
      name: "Poseidon",
      class: "Mage",
      pantheon: "Greek",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/c/ca/SkinArt_Poseidon_Default_V2.jpg/250px-SkinArt_Poseidon_Default_V2.jpg?version=1eb02da2bd611619556012db9d70ca45"
    },
    {
      name: "Ra",
      class: "Mage",
      pantheon: "Egyptian",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/0/0e/SkinArt_Ra_Default.jpg/250px-SkinArt_Ra_Default.jpg?version=5e97f20bce2d3f57e77e278b2377014c"
    },
    {
      name: "Raijin",
      class: "Mage",
      pantheon: "Japanese",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/d/dd/SkinArt_Raijin_Default.jpg/250px-SkinArt_Raijin_Default.jpg?version=67a738c3bfca269672de02e5d37a92e4"
    },
    {
      name: "Rama",
      class: "Hunter",
      pantheon: "Hindu",
      powerType: "Physical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/0/00/SkinArt_Rama_Default.jpg/250px-SkinArt_Rama_Default.jpg?version=d66de86aa0ff89f30310b2419ac13d47"
    },

    {
      name: "Ratatoskr",
      class: "Assassin",
      pantheon: "Norse",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/0/0b/SkinArt_Ratatoskr_Default.jpg/250px-SkinArt_Ratatoskr_Default.jpg?version=14c1104e66a3be3cae9a2cf8b41dccf1"
    },
    {
      name: "Ravana",
      class: "Warrior",
      pantheon: "Hindu",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/1/16/SkinArt_Ravana_Default.jpg/250px-SkinArt_Ravana_Default.jpg?version=3e3756d317866a9883099a1ede305a4f"
    },
    {
      name: "Scylla",
      class: "Mage",
      pantheon: "Greek",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/c/c7/SkinArt_Scylla_Default.jpg/250px-SkinArt_Scylla_Default.jpg?version=551198bbdeca7c47d064ad3e17db9c37"
    },

    {
      name: "Serqet",
      class: "Assassin",
      pantheon: "Egyptian",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/9/9b/SkinArt_Serqet_Default.jpg/250px-SkinArt_Serqet_Default.jpg?version=944ba75e1cbfaf97eb5340c1c390c858"
    },
    {
      name: "Set",
      class: "Assassin",
      pantheon: "Egyptian",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/c/cf/SkinArt_Set_Default.jpg/250px-SkinArt_Set_Default.jpg?version=962c83f2ba50184d033b54330586cad8"
    },
    {
      name: "Skadi",
      class: "Hunter",
      pantheon: "Norse",
      powerType: "Physical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/5/58/SkinArt_Skadi_Default.jpg/250px-SkinArt_Skadi_Default.jpg?version=604bca4cfa22b81f5aa2cefe81b312e5"
    },
    {
      name: "Sobek",
      class: "Guardian",
      pantheon: "Egyptian",
      powerType: "Magical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/b/b8/SkinArt_Sobek_Default.jpg/250px-SkinArt_Sobek_Default.jpg?version=d50d790e30dd1b654f5dd681a05bc891"
    },
    {
      name: "Sol",
      class: "Mage",
      pantheon: "Norse",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/d/dc/SkinArt_Sol_Default.jpg/250px-SkinArt_Sol_Default.jpg?version=18ca4cd2e1e1bd7da13ad5fded31e826"
    },
    {
      name: "Sun Wukong",
      class: "Warrior",
      pantheon: "Chinese",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/b/b7/SkinArt_SunWukong_Default.jpg/250px-SkinArt_SunWukong_Default.jpg?version=7e0ffb3ae12aa267af2c49ebb810a1ef"
    },

    {
      name: "Susano",
      class: "Assassin",
      pantheon: "Japanese",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/6/6b/SkinArt_Susano_Default.jpg/250px-SkinArt_Susano_Default.jpg?version=1d7fbbe75f69c2b90593def5c795a11e"
    },
    {
      name: "Sylvanus",
      class: "Guardian",
      pantheon: "Roman",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/2/23/SkinArt_Sylvanus_Default.jpg/250px-SkinArt_Sylvanus_Default.jpg?version=f119e20e31aaf7f8fb5e3eec792bac34"
    },
    {
      name: "Terra",
      class: "Guardian",
      pantheon: "Roman",
      powerType: "Magical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/b/b9/SkinArt_Terra_Default.jpg/250px-SkinArt_Terra_Default.jpg?version=71fb87d6d40e2cd6965ef2cd60230e6f"
    },
    {
      name: "Thanatos",
      class: "Assassin",
      pantheon: "Greek",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/8/82/SkinArt_Thanatos_Default.jpg/250px-SkinArt_Thanatos_Default.jpg?version=420f2cd26a25a3ddc3ae6e4484487d7e"
    },
    {
      name: "The Morrigan",
      class: "Mage",
      pantheon: "Celtic",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/6/68/SkinArt_TheMorrigan_Default.jpg/250px-SkinArt_TheMorrigan_Default.jpg?version=6051f74ff24a9e4e19ad167eaf237380"
    },
    {
      name: "Thor",
      class: "Assassin",
      pantheon: "Norse",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/7/7e/SkinArt_Thor_Default.jpg/250px-SkinArt_Thor_Default.jpg?version=de9e738598a5571c5549137c66f8f095"
    },
    {
      name: "Thoth",
      class: "Mage",
      pantheon: "Egyptian",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/1/19/SkinArt_Thoth_Default.jpg/250px-SkinArt_Thoth_Default.jpg?version=50a819716d080898fcc4844bc97b38f4"
    },

    {
      name: "Tyr",
      class: "Warrior",
      pantheon: "Norse",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/9/93/SkinArt_Tyr_Default.jpg/250px-SkinArt_Tyr_Default.jpg?version=c4918e13a7e7830551496ad01f4c8502"
    },

    {
      name: "Ullr",
      class: "Hunter",
      pantheon: "Norse",
      powerType: "Physical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/1/1c/SkinArt_Ullr_Default.jpg/250px-SkinArt_Ullr_Default.jpg?version=7520373f41a13aa24bd770647d437dce"
    },
    {
      name: "Vamana",
      class: "Warrior",
      pantheon: "Hindu",
      powerType: "Physical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/7/7e/SkinArt_Vamana_Default_V2.jpg/250px-SkinArt_Vamana_Default_V2.jpg?version=ee300abe2e75bd34dbafb414565c1487"
    },
    {
      name: "Vulcan",
      class: "Mage",
      pantheon: "Roman",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/5/54/SkinArt_Vulcan_Default.jpg/250px-SkinArt_Vulcan_Default.jpg?version=c97a89d2bcef052fbefe2c2645696b7b"
    },

    {
      name: "Xbalanque",
      class: "Hunter",
      pantheon: "Mayan",
      powerType: "Physical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/3/3d/SkinArt_Xbalanque_Default.jpg/250px-SkinArt_Xbalanque_Default.jpg?version=17a1f1b38c74dcf526d67f2a1c67a24c"
    },
    {
      name: "Xing Tian",
      class: "Guardian",
      pantheon: "Chinese",
      powerType: "Magical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/0/0b/SkinArt_XingTian_Default.jpg/250px-SkinArt_XingTian_Default.jpg?version=75872b716bfa09802f728ec6eaa891b0"
    },
    {
      name: "Yemoja",
      class: "Guardian",
      pantheon: "Yoruba",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/7/7b/SkinArt_Yemoja_Default.jpg/250px-SkinArt_Yemoja_Default.jpg?version=6e432bd6094176d07f470f9f83f1f31b"
    },
    {
      name: "Ymir",
      class: "Guardian",
      pantheon: "Norse",
      powerType: "Magical",
      attackType: "Melee",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/1/17/SkinArt_Ymir_Default.jpg/250px-SkinArt_Ymir_Default.jpg?version=f0a119c50ed95ad56892655a5ee7ee5e"
    },

    {
      name: "Zeus",
      class: "Mage",
      pantheon: "Greek",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/e/e3/SkinArt_Zeus_Default.jpg/250px-SkinArt_Zeus_Default.jpg?version=ed76822f0ac6f7dd51a2cdfda890f845"
    },

    {
      name: "Zhong Kui",
      class: "Mage",
      pantheon: "Chinese",
      powerType: "Magical",
      attackType: "Ranged",
      img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/9/91/SkinArt_ZhongKui_Default.jpg/250px-SkinArt_ZhongKui_Default.jpg?version=312d7e578976db28e9da393ca08336de"
    },
  
  ])
  
  await Items.bulkCreate([
  {Item:"Ninja Tabi",isPhysical: true,isMagical: false,Choosen: false,img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/8/85/P_NinjaTabi.png?version=b84d6a8d8f8db4d0a4a8839acc750fce"},
  {Item:"Reinforced Greaves",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/c/c5/P_ReinforcedGreaves.png?version=728dbc91d45a429785bca6826ebdb5fa"},
  {Item:"Reinforced Shoes",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/9/92/M_ReinforcedGreaves.png?version=99c3a28477035de0801894b53c68d5db"},
  {Item:"Shoes Of Focus",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/1/1d/M_Shoes_ofFocus.png?version=e159b2f086d25fff003cd1f02172c077"},
  {Item:"Acorn Of Yggdrasil",isPhysical:true,isMagical:false,Choosen:false,SpecialItem:true,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/3/35/OpalAcorn_T3.png?version=257603fe6d3df1ffaf33104ab8e1fb3e"},
  {Item:"Talaria Boots",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/4/45/TalariaBoots_T3.png?version=ca7c89191209acd880e48cbeef8aad44"},
  {Item:"Travelers Shoes",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/5/51/TravelersShoes_T3.png?version=04d46f8887711bd291e040d8f6dcb6fd"},
  {Item:"Shoes Of The Magi",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/2/25/M_Shoes_oftheMagi.png?version=9446d412c98265564c98bcd1d2df2b4b"},
  {Item:"Warrior Tabi",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/f/ff/P_WarriorTabi.png?version=be7bdc714fe52f8266d86283874b2652"},
  {Item:"Relic Dagger",isPhysical:true,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/8/83/RitualDagger_T3.png?version=79f3d2848f79453c177d45174cb3d0c4"},
  {Item:"Winged Blade",isPhysical:true,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/6/64/WingedBlade_T3.png?version=0f4d4a7ebcc9149a128a0d3ae207b44f"},
  {Item:"Emperors Armor",isPhysical:true,isMagical:true,Choosen:false,img_url: "https://gamepedia.cursecdn.com/smite_gamepedia/7/78/EmperorsArmor_T3.png?version=e4fb464cef370098ebff90f0873aac95" },
  {Item:"Contagion",isPhysical:true,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/7/78/EmperorsArmor_T3.png?version=e4fb464cef370098ebff90f0873aac95"},
  {Item:"Lotus Crown",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/3/35/LotusCrown_T3.png?version=95df33f830103bd8f548517bffc2db1d"},
  {Item:"Witchblade",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/8/89/Witchblade_T3.png?version=f1ea22d3f4fe1c4c965c513912bfa903"},
  {Item:"Heartward Amulet",isPhysical:true,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/4/4a/HeartwardAmulet_T3.png?version=b7fd0e78fee09467c53d57d8c5ba5587"},
  {Item:"Odysseus Bow",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/b/b5/OdysseusBow_T3.png?version=f3e54ed8feaed6fdf05f5fe24ea8d2f5"},
  {Item:"Oni Hunters Garb",isPhysical:true,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/a/ae/OniHuntersGarb_T3.png?version=12cc5a3cb34fe0b0035bf6817f3bcdaf"},
  {Item:"Shield Of Regrowth",isPhysical:true,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/2/29/ShieldofRegrowth_T3.png?version=3db1cbc88d289683f6ed5cee1ead1f26"},
  {Item:"Sovereignty",isPhysical:true,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/3/37/Sovereignty_T3.png?version=be01c7a67ee39b956d33aa01ef8573a1"},
  {Item:"Spectral Armor",isPhysical:true,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/6/6f/SpectralArmor_T3.png?version=30c141946fa78351a2d30e724d43e3a7"},
  {Item:"Ancile",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/d/d4/Ancile_T3.png?version=5b46dfa83c98d4b086d3aae94825b742"},
  {Item:"Celestial Legion Helm",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/9/94/CelestialLegionHelm_T3.png?version=2ea333b10063e1fa2cc9580afd794d0a"},
  {Item:"Demonic Grip",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/0/01/DemonicGrip_T3.png?version=fa4bd4e4a4b77cc0cd6160155cd8e876"},
  {Item:"Hydras Lament",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/3/34/HydrasLament_T3.png?version=8de04bba7433902d829573a9c521cc92"},
  {Item:"Jade Emperors Crown",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/f/f0/JadeEmperorsCrown_T3.png?version=25b10a4599e00906bfe10688dd5bc4ae"},
  {Item:"Magis Cloak",isPhysical:true,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/1/18/MagisBlessing_T3.png?version=212d30485d0c621af40655432e8d24f3"},
  {Item:"Runic Shield",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/c/c1/RunicShield_T3.png?version=e05a953761ce548d2834002149680282"},
  {Item:"Talisman Of Energy",isPhysical:true,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/9/93/TalismanoftheRelentless_T3.png?version=fa8942942e5a5823a468ae9b09368316"},
  {Item:"Atalantas Bow",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/0/0a/AtalantasBow_T3.png?version=e96e282f474a7f41665bf845020fe4c8"},
  {Item:"Blackthorn Hammer",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/d/d8/BlackthornHammer_T3.png?version=f14e277b91770ee99f5bebc8c353d8d4"},
  {Item:"Genjis Guard",isPhysical:true,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/e/e2/GenjisGuard_T3.png?version=d1fb82545369b82ec8ce14635114a2ad" },
  {Item:"Golden Blade",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/e/e8/GoldenBlade_T3.png?version=8e29317932329856c9381ad9dcb7d748" },
  {Item:"Hide Of The Nemean Lion",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/7/7e/HideoftheNemeanLion_T3.png?version=da2056ca24561303a3f772bc01961a76"},
  {Item:"Shoguns Kusari",isPhysical:true,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/3/3c/ShogunsKusari_T3.png?version=47da9b2b4de3da8cceb8f78df5825d69"},
  {Item:"Silverbranch Bow",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/7/78/SilverbranchBow_T3.png?version=d7c3fe9deb4592217152ef4b3b2ff870"},
  {Item:"Toxic Blade",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/e/eb/ToxicBlade_T3.png?version=2d3c9dffd054b25c263c276c42b72e1d"},
  {Item:"Mail Of Renewal",isPhysical:true,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/0/07/MailofRenewal_T3.png?version=2dc9327e3bb7b089d51d03fc6437650d"},
  {Item:"Pestilence",isPhysical:true,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/4/46/Pestilence_T3.png?version=fac9653057788c01dfd310a9b2741ad4"},
  {Item:"Stone Of Gaia",isPhysical:true,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/3/32/StoneofGaia_T3.png?version=8884e01adde71f8317ccf079bb61e3ba"},
  {Item:"Void Stone ",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/0/0e/VoidStone_T3.png?version=8aa8b5d9a977138f5d8a4d0d95253dc0"},
  {Item:"Breastplate Of Valor",isPhysical:true,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/5/51/BreastPlateofValor_T3.png?version=721fcb2a41a59b90b4cd3b1cf4009c92"},
  {Item:"Devourers Gauntlet",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/d/d7/DevourersGauntlet_T3.png?version=96e8ad6b5dbaa0744993a2ab51fa3542"},
  {Item:"Divine Ruin",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/f/f7/DivineRuin_T3.png?version=bffcc83ceec0266473d7ba2c5eeee28c"},
  {Item:"Frostbound Hammer",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/7/78/FrostboundHammer_T3.png?version=5e3743f2fddf5c7606696be7b01b78d5"},
  {Item:"Hastened Katana",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/b/bc/HastenedKatana_T3.png?version=4ad163cbf1c172daab6e9db7fe5de946"},
  {Item:"Hastened Ring",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/9/90/HastenedRing_T3.png?version=c6d1f70ea4f05db9ca3c3f92e4bf6ebb"},
  {Item:"Heartseeker",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/9/97/Heartseeker_T3.png?version=831b755867cd4c9866a1dd00978f1f2f"},
  {Item:"Lonos Mask",isPhysical:true,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/5/50/LonosMask_T3.png?version=5e1be93b928557fe2ca689ae9c7ce308"},
  {Item:"Midgardian Mail",isPhysical:true,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/f/fc/MidGuardianMail_T3.png?version=d75015b5c8d072cf99f38ecbb193f71e"},
  {Item:"Obsidian Shard",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/1/1f/ObsidianShard_T3.png?version=781fef641a566b29998bd706cd2659f8"},
  {Item:"Polynomicon",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/b/bc/Polynomicon_T3.png?version=eb6601b00ce0a5a391714d06985e40f4"},
  {Item:"Pythagorems Piece",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/5/51/PythagoremsPiece_T3.png?version=3b7d8b7083f95b10156de8ad40ae8264"},
  {Item:"Runeforged Hammer",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/6/62/RuneforgedHammer_T3.png?version=3d61d18d86484719c70827872f242b3e"},
  {Item:"Soul Eater",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/8/82/SoulEater_T3.png?version=a3c799514a5cc5891db55bad7aa6e362"},
  {Item:"Soul Gem",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/b/b9/SoulGem_T3.png?version=4cd3f5c21dbe06efed036a922ed1c04a"},
  {Item:"Stone Of Fal",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/c/c4/StoneofFal_T3.png?version=b35125bc88cc4beb77e489cf08e0f90e"},
  {Item:"Titans Bane",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/c/cc/TitansBane_T3.png?version=7b0c2d5afc147ff0e3f6dd50b773023a"},
  {Item:"Pridwen",isPhysical:true,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/1/17/Pridwen_T3.png?version=1f251f8e8ebe48e83f1c8c653d603458"},
  {Item:"Brawlers Beat Stick",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/f/f1/BrawlersBeatStick_T3.png?version=e9e4e8fe16538abc54529779c91362ce"},
  {Item:"Jotunns Wrath",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/f/fd/JotunnsWrath_T3.png?version=9ebfa9080c6f38571755fed4b4d77626"},
  {Item:"The Executioner",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/e/ef/The_Executioner.png?version=bf3d7ff3f6d01d0ac047eb62ace9de22"},
  {Item:"Bulwark Of Hope",isPhysical:true,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/6/64/BulwarkofHope_T3.png?version=10d30a8a36b9fecbd1f87e96a8cb609a"},
  {Item:"Gauntlet Of Thebes",isPhysical:true,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/8/87/GauntletofThebes_T3.png?version=bed26b4b17d01db1b72e18b76633a60d"},
  {Item:"Rage",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/3/38/Rage_T3.png?version=00ca65cd223f520f1b5dd9f85463c9e2"},
  {Item:"Shamans Ring",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/4/49/ShamansRing_T3.png?version=1d604084ea1a1e62bf434ff860f92d0f" },
  {Item:"Shifters Shield",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/b/b7/ShapeShifterShield_T3.png?version=cabeac5c8db5db6d0418a3e4300bce8d"},
  {Item:"The Crusher",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/5/5f/TheCrusher_T3.png?version=73719ee94b4fc5e3397f32a785c7ca98"},
  {Item:"Hide Of The Urchin",isPhysical:true,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/7/7a/HideoftheUrchin_T3.png?version=49fef758a97abd40157170e23dfb3d9f"},
  {Item:"Spear Of The Magus",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/6/6f/SpearoftheMagus_T3.png?version=a30d07008659cbb9180fa4bf212b0731"},
  {Item:"Bancrofts Talon",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/6/69/BancroftsTalon_T3.png?version=672a16eeb68796ee408763d3801e618d"},
  {Item:"Bumbas Mask",isPhysical:true,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/0/04/BumbasMask_T3.png?version=a54066aff67e4f3c516f616d2ff830b5"},
  {Item:"Masamune",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/d/d9/Masamune_T3.png?version=a72edadeaae9386a7512350adac25161"},
  {Item:"Poisoned Star",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/2/25/EnvenomedShuriken_T3.png?version=7b75c5e6fbb92b6454cf918500fe3643"},
  {Item:"Rangdas Mask",isPhysical:true,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/3/38/RangdasMask_T3.png?version=5924181da0f818ee454c16e2eec0731d" },
  {Item:"Spirit Robe",isPhysical:true,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/f/f4/SpiritRobe_T3.png?version=e247fc7ea861ec59084826f509ccf96b"},
  {Item:"Stone Cutting Sword",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/6/6d/StoneCuttingSword_T3.png?version=bbed21d6d504df2b7168f96984f8a445"},
  {Item:"Asi",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/7/7d/Asi_T3.png?version=a725ab34fc14d879ccc97dd8608ad2a5"},
  {Item:"Aronight",isPhysical:true,isMagical:false,Choosen:true,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/e/e9/Arondight_T3.png?version=f56466d9ddb343cfcc3ec110193b7e7e"},
  {Item:"Book Of The Dead",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/9/98/BookoftheDead_T3.png?version=2cfb8b53f78137e96c0e1444e65f8bc6"},
  {Item:"Ethereal Staff",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/4/4b/EtherealStaff_T3.png?version=3337a693378ee9bc694fece27165a059"},
  {Item:"Ichaival",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/5/5a/Ichaival_T3.png?version=91e0cb7e7788586082bdf00595a3ebe5" },
  {Item:"Spear Of Desolation",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/c/c6/SpearofDesolation_T3.png?version=d4fec448edda30578efb0595926391a5"},
  {Item:"Transcendence",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/3/3d/Transcendence_T3.png?version=fa54de9bc5f00783dd7046b9a659ab57"},
  {Item:"Wind Demon",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/4/4b/WindDemon_T3.png?version=9b34611d0ee09df3b705163d0d55f923"},
  {Item:"Book Of Thoth",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/2/2c/BookofThoth_T3.png?version=c37abf3fa0d26c2c8f0f2c92d2825169"},
  {Item:"Malice",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/4/44/Malice_T3.png?version=d6389a73df0f3a7a77c2520a5570b3f5" },
  {Item:"Warlocks Staff",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/0/0f/WarlocksStaff_T3.png?version=633d801711ad33c5c9c1c1f39b9c9374"},
  {Item:"Gem Of Isolation",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/8/8b/GemofIsolation_T3.png?version=51a83477feee417161a2066686ea1763"},
  {Item:"Mystical Mail",isPhysical:true,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/2/2b/MysticalMail_T3.png?version=05a2f4a5ed187ceb2130ad8ab8de23a9"},
  {Item:"Qins Sais",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/2/23/Qins_Sais.png?version=27e9c5fa517b82f96b69d42486cfcb09" },
  {Item:"Telkhines Ring",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/6/66/TelkhinesRing_T3.png?version=d51dd8fb2b575822640d3336f3f52b09"},
  {Item:"Soul Reaver",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/5/51/SoulReaver_T3.png?version=263a195edce1962e06a43a9a2e1ad785"},
  {Item:"Bloodforge",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/f/fa/Bloodforge_T3.png?version=8502a984a2b34d31bab767a6656b13e8" },
  {Item:"Chronos Pendant",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/6/69/ChronosPendant_T3.png?version=9f0d979ce605e55a9fc67715104db9ab"},
  {Item:"Typhons Fang",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/c/c1/TyphonsFang_T3.png?version=c7335c3f6b562702191ba4e9174aec9a"},
  {Item:"Mantle Of Discord",isPhysical:true,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/7/7b/CloakofUnrelentingSorrow_T3.png?version=0c2bcd9321bff2f79a542730c06fccf4"},
  {Item:"Deathbringer",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/4/46/Deathbringer_T3.png?version=45d1ba8bd216efe669aac052e2971f7b"},
  {Item:"Doom Orb",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/6/62/DoomOrb_T3.png?version=871fea48d64f7189fe8ef6d4f188bc27"},
  {Item:"Rod Of Tahuti",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/e/e1/RodofTahuti_T3.png?version=0bdd7f7149f399846c137536b45372d4"},
  {Item:"Rod Of Asclepius",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/f/f0/RodofAscelpius_T3.png?version=d5aa79a8c55376a054e17b8326e798f6"},
  {Item:"Dynasty Plate Helm",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/8/88/DynastyPlateHelm_T3.png?version=79bd11b0cd86205ae74aa15ecc830f1b"},
  {Item:"Gladiators Shield",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/f/fe/GladiatorsShield_T2.png?version=98726e26be662a09c1baf540e4b83704"},
  {Item:"Berserkers Shield",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/4/41/BerserkersShield_T2.png?version=57397820144fcc61ee7b4a8ac17461da"},
  {Item:"Stone Of Binding",isPhysical: false, isMagical: true, Choosen: false, img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/1/1e/StoneofBinding_T2.png?version=443e1dc725bf240f1b5b46192f67c8bb" },
  {Item:"Void Shield",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/0/08/VoidShield_T3.png?version=f341ab605657df41fa298840157e80cd"},
  {Item:"Fail Not",isPhysical:true,isMagical:false,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/1/18/Fail-not_T3.png?version=4a2a784d01712a01fb16203d9c507b41"},
  {Item:"Staff Of Myrddin",isPhysical:false,isMagical:true,Choosen:false,img_url:"https://gamepedia.cursecdn.com/smite_gamepedia/5/55/StaffofMyrddin_T3.png?version=c5971d94fadef17b2fd68c73c7ab946f"}
  ])
  process.exit();
}

main()
