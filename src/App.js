import React, {Component} from 'react';
import './App.css';
import BlogCard from './BlogCard';
import {isArrayEmpty} from './Utils';

class App extends Component {
  state = {
    showBlogs: true,

  blogArr: [
    {
      id: 1,
      title: 'Blog Title 1',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting'
      + 'industry. Lorem Ipsum has been the industry',
      likeCount: 0
    },
    {
      id: 2,
      title: 'Blog Title 2',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting'
      + 'industry. Lorem Ipsum has been the industry',
      likeCount: 0
    },
    {
      id: 3,
      title: 'Blog Title 3',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting'
      + 'industry. Lorem Ipsum has been the industry',
      likeCount: 0
    }
  ]

  }

  onLickBtnClicked = (pos) => {
    console.log(pos);
    const updatedBlogList = this.state.blogArr;
    const updatedBlogObj = updatedBlogList[pos]

    updatedBlogObj.likeCount = ++updatedBlogObj.likeCount;
    updatedBlogList[pos] = updatedBlogObj;

    this.setState({blogArr: updatedBlogList});
  }


  onHideBtnClick = () => {
    this.setState((prevState, prevProps) => {
      return {showBlogs: !prevState.showBlogs}
    });
  }


  render() {
    console.log('render called');
    const blogCards = isArrayEmpty(this.state.blogArr) ? this.state.blogArr.map((blog, pos) => {
      // return (
      //   <div className="BlogCard" key={blog.id}>
      //     <h3>{blog.title}</h3>
      //     <p>{blog.description}</p>
      //   </div>
      // )   
    return <BlogCard {...blog} likeBtnClick={() => this.onLickBtnClicked(pos)} key={blog.id}/>
    }) : [];
    return (
      <div className="App">
        <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide' : 'Show'} List</button>
        <br></br>
        <div className="BlogCard">
          {/* <BlogCard/> */}
          {this.state.showBlogs ? blogCards : null}
        </div>
      </div>
    );
    
  }

}

export default App;
