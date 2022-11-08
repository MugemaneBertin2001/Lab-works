const {MongoClient} = require("mongodb")

async function main(){
    const url = "mongodb+srv://MugemaneBertin2001:12345@cluster0.oqjbtbf.mongodb.net/test";
    const client = new MongoClient(url)
    try{    
        await client.connect();
        //await createMultiple(client,mine)
        await findOneListingByName(client,"Murenzi")
        } catch(e){
            console.error(e)
        } finally{
            await client.close();
        }
    
}
main().catch(console.error)
//

async function findOneListingByName(client,listingName){
  const result =  await client.db("test").collection("listAndReviews").findOne({name : listingName})
    if(result){
        console.log(`Found a listing in collection with name ${listingName}`)
        console.log(result)
    }
    else{
        console.log(`No listing found in collection with name`);
        console.log(listingName)
    }
}
//
async function createMultiple(client, inputArray){
    const result = await client.db("test").collection("reviewAndroll").insertMany(inputArray);
    console.log(`${result.insertedCount} new listing with id :`)
    console.log(result.insertedIds)
}
//
async function createListing(client,newListing){
    const result = await client.db("test").collection("listAndReviews").insertOne(newListing)

    console.log(`The new insertation with ${result.insertedId} id .`)
}
//
async function listDatabases(client)
{
    const databaseslist = await client.db().admin().listDatabases()
    console.log("database : ");

    databaseslist.databases.forEach((db) => {
        console.log(db.name)
        
    });
}