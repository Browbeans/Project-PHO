import { ReactComponent } from '*.svg';
import React, { CSSProperties } from 'react'; 
import { Link, Route, Switch } from 'react-router-dom';
import BarItem from './BarItem';
import BarNavigation from './BarNavigation';
import ContentItem from './ContentItem';

const imageAvenyn =
  "https://www.avenyn.se/wp-content/uploads/2016/11/avenyvandring700x350.jpg";

  const imageHisingen =
    "https://cached-images.bonnier.news/swift/bilder/epi-30-dn/UploadedImages/2016/3/29/283a28b8-4979-4d3b-9ebc-3b515b01299f/bigOriginal.jpg";

const imageJarntorget =
  "https://www.gp.se/image/policy:1.23707940:1581244196/image.jpg?f=Wide%26w=1200%26%24p%24f%24w=834285a";

  interface Props{
    
  }
  
  const MainContent: React.FC<Props> = ()  => {
  
  
    // const jarntorget = ['Soho', 'Cafe-publik', 'Brygghuset', 'Hops']
    // const hisingen = ['Ölstugan', 'Kville-Biljard', 'Antibarbarus', 'Lindholmen-Streetfood']
    const avenyn = [ {
      title: 'Yaki-da', 
      image: '',
      info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad excepturi vero accusamus harum labore itaque dicta cupiditate incidunt. Nisi repellat mollitia eligendi veniam saepe labore est! Voluptatibus officia saepe quidem!'
    },
    {
      title: 'Lounge', 
      image: '',
      info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad excepturi vero accusamus harum labore itaque dicta cupiditate incidunt. Nisi repellat mollitia eligendi veniam saepe labore est! Voluptatibus officia saepe quidem!'
    },
    {
      title: 'Valand', 
      image: '',
      info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad excepturi vero accusamus harum labore itaque dicta cupiditate incidunt. Nisi repellat mollitia eligendi veniam saepe labore est! Voluptatibus officia saepe quidem!'
    },
    {
      title: 'Hardrock-cafe', 
      image: '',
      info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad excepturi vero accusamus harum labore itaque dicta cupiditate incidunt. Nisi repellat mollitia eligendi veniam saepe labore est! Voluptatibus officia saepe quidem!'
    },
  ]
    const jarntorget = [ {
      title: 'Soho', 
      image: '',
      info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad excepturi vero accusamus harum labore itaque dicta cupiditate incidunt. Nisi repellat mollitia eligendi veniam saepe labore est! Voluptatibus officia saepe quidem!'
    },
    {
      title: 'Cafe-publik', 
      image: '',
      info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad excepturi vero accusamus harum labore itaque dicta cupiditate incidunt. Nisi repellat mollitia eligendi veniam saepe labore est! Voluptatibus officia saepe quidem!'
    },
    {
      title: 'Brygghuset', 
      image: '',
      info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad excepturi vero accusamus harum labore itaque dicta cupiditate incidunt. Nisi repellat mollitia eligendi veniam saepe labore est! Voluptatibus officia saepe quidem!'
    },
    {
      title: 'Hops', 
      image: '',
      info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad excepturi vero accusamus harum labore itaque dicta cupiditate incidunt. Nisi repellat mollitia eligendi veniam saepe labore est! Voluptatibus officia saepe quidem!'
    },
  ]
    const hisingen = [ {
      title: 'Ölstugan', 
      image: '',
      info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad excepturi vero accusamus harum labore itaque dicta cupiditate incidunt. Nisi repellat mollitia eligendi veniam saepe labore est! Voluptatibus officia saepe quidem!'
    },
    {
      title: 'Kville-biljard', 
      image: '',
      info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad excepturi vero accusamus harum labore itaque dicta cupiditate incidunt. Nisi repellat mollitia eligendi veniam saepe labore est! Voluptatibus officia saepe quidem!'
    },
    {
      title: 'Antibarbarus', 
      image: '',
      info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad excepturi vero accusamus harum labore itaque dicta cupiditate incidunt. Nisi repellat mollitia eligendi veniam saepe labore est! Voluptatibus officia saepe quidem!'
    },
    {
      title: 'Lindholmen-streetfood', 
      image: '',
      info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad excepturi vero accusamus harum labore itaque dicta cupiditate incidunt. Nisi repellat mollitia eligendi veniam saepe labore est! Voluptatibus officia saepe quidem!'
    },
  ]

    return (
      <div style={rootStyle}>
        <Switch>
            <Route exact path="/">
              <Link to="/avenyn" style={{ textDecoration: "none" }}>
                <ContentItem title="Avenyn" image={imageAvenyn} />
              </Link>
              <Link to="/jarntorget" style={{ textDecoration: "none" }}>
                <ContentItem title="Järntorget" image={imageJarntorget} />
              </Link>
              <Link to="/hisingen" style={{ textDecoration: "none" }}>
                <ContentItem title="Hisingen" image={imageHisingen} />
              </Link> 
            </Route>
            <Route path="/jarntorget">
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
            )}
        </Switch>
      </div>
    );
}

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

const rootStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  minHeight: '90vh',
  justifyContent: "space-around",
  alignItems: "center",
};


export default MainContent; 