const chalk = require('chalk');
const rpc = require("discordrpcgenerator");
const config = require(".././config.json")

module.exports = async(client) => {
  const small = await rpc.getRpcImage(config.applicationid, config.smallimgname);
  
  rpc.getRpcImage(config.applicationid, config.imagename)
  .then(large => {
    let presence = new rpc.Rpc()
    .setName(config.name)
    .setUrl('https://frownmc.xyz')
    .setType(config.type)
    .setApplicationId(config.applicationid)

.setAssetsSmallImage(small.id)   
    .setState(config.state)
    .setDetails(config.details)
    .setStartTimestamp(config.time || Date.now())
    console.log(presence.toDiscord())
    client.user.setStatus("dnd");
    client.user.setPresence(presence.toDiscord()).catch(console.error);
  })
  console.log(chalk.hex("#ff0000")("Succesfully enabled rpc"))
           }