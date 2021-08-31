import React from 'react'


export default class Input extends React.Component{
    constructor(props){
        super(props)

        this.state={
            name:"",
            tip:null,
            customer:[],
            quality:0,
            amount:null,
            count:0,
            tipcount:0
        }
    }
    change=()=>{
        const totaltip= this.state.customer.reduce((total,item)=>{
         return total+item[1]
        },0)
      this.setState({count:this.state.customer.length,tipcount:totaltip})
    }
render(){
    console.log(this.state.customer)
    return(
        <div className="border mb-2">
           
           <div >
             <div>Enter Your Bill Amount</div><br/>
             Rs. &nbsp; <input type="text" value={this.state.amount} onChange={(e)=>{this.setState({amount:e.target.value})}} placeholder="Enter Amount" required/><br/>
             <br/>
             <div className="border-top pt-3">
                How was the service? &nbsp;
                <select class=""  onClick={(e)=>this.setState({quality:e.target.value })} name="quality" id="">
                <option></option>
                <option value=".2">Excellent-20%</option>
                <option value=".1">Medium-10%</option>
                <option value=".05">Not so good-5%</option>
                </select>
                &nbsp;
                <input type="text"  placeholder="Customer Name" onChange={(e)=>this.setState({name:e.target.value})} required /> &nbsp;
                
                <button className="btn-primary"  onClick={(e)=>{this.setState({customer:[...this.state.customer,[this.state.name,this.state.tip=(this.state.amount*this.state.quality)]]})}}>Add Customer</button>
                <br/>   
             </div>
                <br/>
            


            <div className="border" >     
                <h4>Customer List</h4>
                <div style={{marginLeft:"20px", float:"left"}}>
                    <div>
                        {this.state.customer.map((item, id)=> {
                            return <li key={id}> 
                        {item[0]} offering a tip of  {item[1]} rupees.
                        </li>
                        })} 
                    </div>
                </div>
                <br/>
                <br/>


                <button className="btn-success" onClick={()=>this.change()}  >Calculate Tip & Customer</button> <br/> 
                <  br/>

                <div className="row border m-1">
                <div className="col-7">Total Customer: {this.state.count}</div>
                <div className="col-4"><span className="border"></span>&nbsp; Total Tip: {this.state.tipcount} </div>
                <br/>
                </div>


            </div>
             </div>
         
        </div>
    )
}

}