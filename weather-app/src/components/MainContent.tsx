import { ReactComponent } from '*.svg';
import React, { CSSProperties } from 'react'; 
import { Link, Route, Switch } from 'react-router-dom';
import BarItem from './BarItem';
import BarNavigation from './BarNavigation';
import ContentItem from './ContentItem';
  interface Props {
  }

const MainContent: React.FC<Props> = ()  => {

const data = [
  {
      Area: 'Avenyn', 
      Bar: [
        {
          title: 'Yaki-da', 
          image: '', 
          info: 'fdsfsdfsdfsdfsdfsdf'
        }, 
        {
          title: 'Lounge', 
          image: '', 
          info: 'fdsfsdfsdfsdfsdfsdf'
        }, 
        {
          title: 'Hardrock-cafe', 
          image: '', 
          info: 'fdsfsdfsdfsdfsdfsdf'
        },
        {
          title: 'Valand', 
          image: '', 
          info: 'fdsfsdfsdfsdfsdfsdf'
        },
      ], 
  },
  {
    Area: 'Hisingen', 
    Bar: [
      {
        title: 'Ölstugan', 
        image: '', 
        info: 'fdsfsdfsdfsdfsdfsdf'
      }, 
      {
        title: 'Lindholmen-streetfood', 
        image: '', 
        info: 'fdsfsdfsdfsdfsdfsdf'
      }, 
      {
        title: 'Antibarbarus', 
        image: '', 
        info: 'fdsfsdfsdfsdfsdfsdf'
      },
      {
        title: 'Kville-biljard', 
        image: '', 
        info: 'fdsfsdfsdfsdfsdfsdf'
      },
    ],
  },
  {
    Area: 'Järntorget', 
    Bar: [
      {
        title: 'Soho', 
        image: '', 
        info: 'fdsfsdfsdfsdfsdfsdf'
      }, 
      {
        title: 'Brygghuset', 
        image: '', 
        info: 'fdsfsdfsdfsdfsdfsdf'
      }, 
      {
        title: 'Cafe-publik', 
        image: '', 
        info: 'fdsfsdfsdfsdfsdfsdf'
      },
      {
        title: 'Hops', 
        image: '', 
        info: 'fdsfsdfsdfsdfsdfsdf'
      },
    ],
  }
]


  const test = data.map((value) => value.Bar)
  
  // function fartMan() {
  //   for(let i = 0; i < test.length; i++) {
  //       test[i].map((value) => console.log(value.title))
  //   }
  // }

  // function fartMan() {
  //   for(let i = 0; i < test.length; i++) {
  //       test[i].map((value) => <BarNavigation id={value.title} key={value.title}/>)
  //   }
  // }
  const bars: any = []
  
  const arrayPush =  () => {
    for(let i = 0; i < test.length; i++) {
      test[i].map((value) => bars.push(value.title))
    }
  }
    
    return (
      <div style={rootStyle}>
        <Switch>
            <Route exact path="/"> 
              {data.map((value) => 
                  <ContentItem title={value.Area} key={value.Area}/>
              )}
            </Route>
             {data.map((value) => 
              <Route path={'/' + value.Area}>
                {arrayPush()}
                {bars.map((value: string) => <BarNavigation id={value} key={value}/>)}
              </Route>
            )} 
        </Switch>
      </div>
    );
}


const rootStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  minHeight: '90vh',
  justifyContent: "space-around",
  alignItems: "center",
};


export default MainContent; 


 {/* <Route path="/järntorget">
                {jarntorget.map((value) => <BarNavigation id={value.title} key={value.title}/>)}
            </Route> 
            <Route path="/hisingen">
                {hisingen.map((value) => <BarNavigation id={value.title} key={value.title}/>)}
            </Route> 
            <Route path="/avenyn">
                {avenyn.map((value) => <BarNavigation id={value.title} key={value.title}/>)}
            </Route>

            {avenyn.map((value) => 
              <Route path={'/' + value.title}>
                <BarItem bar={value} />
              </Route>
            )}

            {jarntorget.map((value) => 
              <Route path={'/' + value.title}>
                <BarItem bar={value} />
              </Route>
            )}

            {hisingen.map((value) => 
              <Route path={'/' + value.title}>
                <BarItem bar={value} />
              </Route>
            )} */}
// class MainContent extends React.Component<Props> {
//   jarntorget: Array<string>
//   hisingen: Array<string>
//   avenyn: Array<string>

//   constructor(props: Props) {
//     super(props)
//     this.state = {url:""}
//     this.handleClick = this.handleClick.bind(this)
//     this.jarntorget = ['Soho', 'Cafe-publik', 'Brygghuset', 'Hops'];
//     this.hisingen = ['Ölstugan', 'Kville-Biljard', 'Antibarbarus', 'Lindholmen-Streetfood'];
//     this.avenyn = ['Yaki-da', 'Hardrock-cafe', 'Lounge', 'Valand'];
//   }

//   handleClick() {
//     return console.log("test")
//   }

//   render() {
//     return(
//     <div style={rootStyle}>
//       <Switch>
//           <Route exact path="/">
//           <Link to="/avenyn" style={{ textDecoration: "none" }}>
//             <ContentItem title="Avenyn" image={imageAvenyn} />
//           </Link>
//           <Link to="/jarntorget" style={{ textDecoration: "none" }}>
//             <ContentItem title="Järntorget" image={imageJarntorget} />
//           </Link>
//           <Link to="/hisingen" style={{ textDecoration: "none" }}>
//             <ContentItem title="Hisingen" image={imageHisingen} />
//           </Link> 
//           </Route>
//           <Route path="/jarntorget">
//               {this.jarntorget.map((value) => <BarNavigation id={value} key={value}/>)}
//           </Route> 
//           <Route path="/hisingen">
//               {this.hisingen.map((value) => <BarNavigation id={value} key={value}/>)}
//           </Route> 
//           <Route path="/avenyn">
//               {this.avenyn.map((value) => <BarNavigation id={value} key={value}/>)}
//           </Route>
//           <Route path="/Yaki-da">
//               <BarItem id="Yaki-da"/>
//           </Route>
//           <Route path="/Hardrock-cafe">
//               <BarItem id="Hardrock-cafe" onClick={this.handleClick}/>
//           </Route>
//           <Route path="/Lounge">
//               <BarItem id="Lounge" />
//           </Route>
//           <Route path="/Valand">
//               <BarItem id="Valand" />
//           </Route>
//       </Switch>
//     </div>
//     )
//   }
// }