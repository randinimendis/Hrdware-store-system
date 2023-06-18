//import "./first.css"


function DashboardCard({bcolor,cardtext,value}){




    return(


        <div class="col-xl-3 col-sm-3 py-0">
                <div class="card  text-white h-110" >
                    <div class="card-body  row" style={{backgroundColor:bcolor}}>
                        <div class="rotate">
                            <i class="fa fa-user fa-3x"></i>
                        </div>
                        <div>
                        <h6 class="text-uppercase display-10 font-weight-bold">{cardtext}</h6>
                        <h1 class="display-0">{value}</h1></div>
                    </div>
                </div>
            </div>

    );
}

export default DashboardCard;