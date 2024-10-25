import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Edit, PlusCircle, Trash } from "lucide-react";
import { useState } from "react";

const Blogs = () => {

    const [blogPosts, setBlogPosts] = useState([
        { id: 1, title: 'Getting Started with React', excerpt: 'Learn the basics of React...' },
        { id: 2, title: 'Advanced TypeScript Techniques', excerpt: 'Dive deep into TypeScript...' },
      ])

    const handleAddBlogPost = (newPost) => {
        setBlogPosts([...blogPosts, { id: blogPosts.length + 1, ...newPost }])
    }
    
    const handleDeleteBlogPost = (id) => {
        setBlogPosts(blogPosts.filter(post => post.id !== id))
    }
    return (
        <div>
           <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Blog Posts</h1>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <PlusCircle className="mr-2 h-4 w-4" /> Add New Post
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Blog Post</DialogTitle>
                      <DialogDescription>
                        Enter the details of your new blog post.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={(e) => {
                      e.preventDefault()
                      const formData = new FormData(e.target)
                      handleAddBlogPost({
                        title: formData.get('postTitle'),
                        excerpt: formData.get('postExcerpt')
                      })
                    }}>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="postTitle" className="text-right">
                            Title
                          </Label>
                          <Input id="postTitle" name="postTitle" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="postExcerpt" className="text-right">
                            Excerpt
                          </Label>
                          <Textarea id="postExcerpt" name="postExcerpt" className="col-span-3" />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Add Post</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                  <Card key={post.id}>
                    <CardHeader>
                      <CardTitle>{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{post.excerpt}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="destructive" size="icon" onClick={() => handleDeleteBlogPost(post.id)}>
                        <Trash className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
        </div>
    );
};

export default Blogs;
