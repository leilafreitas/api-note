const noteServices = require('../services/noteServices');

module.exports={
    ping:(req,res)=>{
     res.json({pong:true});
    },
    all: async (req,res)=>{
        let json ={error:'',result:[]}
        let notes = await noteServices.getAll();
        for (let i of notes){
            json.result.push({
                id:i.id,
                title:i.title
            })
        }
        res.json(json);
    },
    one:async(req,res)=>{
        let json ={error:'',result:[]};
        let id = req.params.id;
        let note = await noteServices.findById(id);
        if(note) json.result=note;
        res.json(json);
    },
    add:async (req,res)=>{
        let json ={error:'',result:[]};
        let title = req.body.title;
        let body= req.body.body;
        if(title && body){
            let note = await noteServices.add(title,body);
            json.result={
                id:note,
                title:title,
                body:body
            }
        }else{
            json.error= 'Campos não preenchidos';
        }        
        
        res.json(json);
    },
    update:async (req,res)=>{
        let json ={error:'',result:[]};
        let id = req.params.id;
        let title= req.body.title;
        let body= req.body.body;
        if(id && title && body){
            await noteServices.update(id,title,body);
            json.result={
                id:id,
                title:title,
                body:body
            }
        }else{
            json.error= 'Campos não preenchidos';
        }        
        
        res.json(json);
    },
    delete:async(req,res)=>{
        let json ={error:'',result:[]};
        let id = req.params.id;

        await noteServices.delete(id);

        res.json(json);

    }
}