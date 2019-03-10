// class Button extends Component {
//   render() {
//     return (
//       <button className="button button-primary">
//         <i className="fa fa-chevron-right"></i> Find out more
//       </button>
//     )
//   }
// }
// 
// // class BoardGameCard extends Component{
// //   render() {
// //     return (
// //       <Card className="BoardGameCardClass">
// //         <CardHeader category={this.props.details.category} image={this.props.details.image}/>
// //         <CardContent>
// //         <h1> {this.props.details.title} </h1>
// //         <p> {this.props.details.text} </p>
// //         </CardContent>
// //         <CardActions>
// //           <Button size="small">Learn More</Button>
// //         </CardActions>
// //       </Card>
// //     );
// //   }
// // }
//
// // class App extends Component {
// //   constructor() {
// //     super();
// //
// //     this.state = {
// //       posts: {}
// //     }
// //   }
// //   componentWillMount() {
// //     this.setState({
// //       posts: PostsData
// //     });
// //   }
// //
// //   render() {
// //     return (
// //       <div >
// //         <header >
// //           </header>
// //         <Grid container spacing={16}>
// //           <Grid item md={12}>
// //         {
// //           Object
// //           .keys(this.state.posts)
// //           .map(key => <BoardGameCard key={key} index={key} details={this.state.posts[key]}/>)
// //         }
// //     </Grid>
// //     </Grid>
// //       </div>
// //     );
// //   }
// // }
//
//
// // Start App
//
// class App extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       posts: {}
//     }
//   }
//   componentWillMount() {
//     this.setState({
//       posts: PostsData
//     });
//   }
//
//
//   render() {
//     return <div>
//       <header className="app-header"></header>
//       <Title />
//       <div className="app-card-list" id="app-card-list">
//         {
//           Object
//           .keys(this.state.posts)
//           .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
//         }
//     </div>
//     </div>
//   }
// }
//
//
// class Title extends Component {
//   render() {
//     return <section className="app-title">
//       <div className="app-title-content">
//         <h1>Latest News</h1>
//         <p>Covering March & April 2015</p>
//       </div>
//     </section>
//   }
// }
//
//
//
// class CardHeader extends Component {
//   render() {
//     const { image, category } = this.props;
//     var style = {
//         backgroundImage: 'url(' + image + ')',
//     };
//     return (
//       <header style={style} className="card-header">
//         <h4 className="card-header--title">{category}</h4>
//       </header>
//     )
//   }
// }
//
//
// class CardBody extends Component {
//   render() {
//     return (
//       <div className="card-body">
//         <p className="date">March 20 2015</p>
//
//         <h2>{this.props.title}</h2>
//
//         <p className="body-content">{this.props.text}</p>
//
//         <Button />
//       </div>
//     )
//   }
// }
//
//
// class Card extends Component {
//   render() {
//     return (
//       <article className="card">
//         <CardHeader category={this.props.details.category} image={this.props.details.image}/>
//         <CardBody title={this.props.details.title} text={this.props.details.text}/>
//       </article>
//     )
//   }
// }
