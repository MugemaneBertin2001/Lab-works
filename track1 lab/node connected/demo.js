const {MongoClient} = require("mongodb")

async function main(){
    const url = "mongodb+srv://MugemaneBertin2001:12345@cluster0.oqjbtbf.mongodb.net/test";
    const client = new MongoClient(url)
        const mine = [
        {
            name:"mine",
            age : 32,
            location:"here"
        
        },
        {
            name:"rare",
            age : 43,
            connection: "zoom"
        },
        {
            head:"cental officer",
            res: "coordination",
            party:"green party"
        }

        ]
    try{    
        await client.connect();
        await createMultiple(client,mine)
        } catch(e){
            console.error(e)
        } finally{
            await client.close();
        }
    
}
main().catch(console.error)
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