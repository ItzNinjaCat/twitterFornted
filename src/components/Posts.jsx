import React from "react";
import { useEffect } from "react";
import {Form, Button } from "react-bootstrap";
function Posts({ loggedIn }) {
    const [posts, setPosts] = React.useState([]);
    const [post, setPost] = React.useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/posts", {
            method: 'POST',
            body: JSON.stringify({
                content: post
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => {
            if (res.ok) {
                setPost("");
            }
        });
    }

        useEffect(() => {
            if (loggedIn) {
                fetch("http://localhost:8080/posts")
                    .then((res) => res.json())
                    .then((data) => {
                        setPosts(data);
                        console.log(data);
                    });
            }
        },);
    return (
            loggedIn ?
        <div className="d-flex w-50 justfiy-content-center">
            <Form
                onSubmit={handleSubmit}
            >
                <Form.Group controlId="post">
                    <Form.Label>Post</Form.Label>
                    <Form.Control type="text" placeholder="Enter post" required onChange={(e) => setPost(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">Submit </Button>
                </Form>
                <div className="d-flex">
                {
                  posts?.map((p, index) => {
                  if (index % 4 === 0) {
                    return (
                      <div key={index} className='row w-75 d-flex justify-content-start'>
                        {
                          posts.slice(index, index + 4).map((post) => 
                            <div key={index} className='w-25 col-3 d-flex flex-wrap text-wrap ticket-card'>
                                  <p>{post}</p>
                            </div>
                          )
                        }
                      </div>
                    )
                  }
                  return null;
                })
                }
                </div>

        </div > : null
        );
}

export default Posts;