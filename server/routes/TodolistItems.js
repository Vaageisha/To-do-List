const router=require('express').Router();
//importing todo model
const todoItemModel= require('../models/todoItem') ;
 

//creating our first router
router.post('/api/item', async (req,res)=>{
   try{
const newItem=new todoItemModel({
    item: req.body.item
})
const saveItem= await newItem.save()
res.status(200).json(saveItem);
   } catch(err){
    res.json(err);
   }
})

//second route to get data from database
router.get('/api/item', async (req,res)=>{
   try{
const allTodoItem= await todoItemModel.find({});
res.status(200).json(allTodoItem)
   }catch(err){
      res.json(err);
   }
})


//updating the item
router.put('/api/item/:id', async (req,res)=>{
   try{
   //to find the item by its id and then proceed to update
   const updateItem = await todoItemModel.findByIdAndUpdate(req.params.id,{$set: req.body});
   res.status(200).json(updateItem);
}catch(err){
      res.json(err);
   }
})


//export route
module.exports=router;


//deleting the items
router.delete('/api/item/:id', async (req,res)=>{
   try{

      //find the items by their id, to be deleted 
      const deleteItem=await todoItemModel.findByIdAndDelete(req.params.id);
      res.status(200).json('Item Deleted');
   }catch(err){
      res.json(err);
   }
})