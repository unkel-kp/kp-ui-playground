import React, { Component } from "react";

import '../style/style.css';

class Documentation extends Component {
    render(){
        return(
            <div className="documentation">
                <div></div>
                <div className="doc-body">
                    <h3>Tech Stack Used:</h3>
                    <ul>
                        <li>JSON server is based on Java Spring Boot (version 2.4.2) and has been bootstrapped using <a href="https://start.spring.io/" target="_blank">Spring Initializr</a>.</li>
                        <li>UI is based on React JS and has been bootstrapped using <a href="https://github.com/facebook/create-react-app" target="_blank">Create React App</a>.</li>
                        <li>Both the applications have been hosted on <a href="https://heroku.com" target="_blank">Heroku</a>.</li>
                        <li>GIT REPOSITORIES:
                            <ul>
                                <li><a href="https://github.com/unkel-kp/kp-ui-playground" target="_blank">UI Repo</a></li>
                                <li><a href="https://github.com/unkel-kp/json-server" target="_blank">Server Repo</a></li>
                            </ul>
                        </li>
                    </ul>

                    <h3>Entity Structure:</h3>
                    <ul>
                        <li>
                            Blog Entity:<br/>
                            <div className="code">
                                title: (String) //Title of the Blog.<br/>
                                author_id: (Integer) //Author Id to map with Author.<br/>
                                read_time: (Integer) //Approxiamate read time.<br/>
                                reads: (Integer) //Total reads so far.<br/>
                                reviews: (Integer) //Total reviews provided.<br/>
                                created_at: (String) //META-DATA: Auto generated field.<br/>
                                modified_at: (String) //META-DATA: Auto generated field.<br/>
                                id: (Integer) //META-DATA: Auto generated field.<br/>
                            </div>  
                        </li>
                        <li>
                            Author Entity:<br/>
                            <div className="code">
                                first_name: (String) //First Name of the Author.<br/>
                                last_name: (String) //Last Name of the Author.<br/>
                                age: (Integer) //Age of the Author.<br/>
                                email: (String) //Email id of the Author.<br/>
                                blogs: (Integer) //Total blogs written by the Author.<br/>
                                created_at: (String) //META-DATA: Auto generated field.<br/>
                                modified_at: (String) //META-DATA: Auto generated field.<br/>
                                id: (Integer) //META-DATA: Auto generated field.<br/>
                            </div>  
                        </li>
                    </ul>


                    <h3>Available Functionalities:</h3>
                    <ul>
                        <li>GET ALL BLOGS: (/blogs/all)
                            <ul>
                                <li>Fetches all the blogs in a batch of 10 blogs per page.</li>
                                <li>Filters are available on title and author_id. (Provide the corresponding parameters)</li>
                                <li>Sorting is available basis of each property, either in ASC or DESC. (Provide the property name to sort with; By default: id in ASC)</li>
                                <li>Pagination is available with a default batch size of 10 blogs per page. (Provide the <b>limit</b> parameter to change the batch size)</li>
                            </ul>
                            Find the descriptive curl below. Substitute/Remove the parameters as per the requirement:
                            <div className="code">
                                {
                                    `curl --location --request GET 'https://kp-json-server.herokuapp.com/blogs/all?title=<title>&author_id=<author_id>&sort=<field_name>&order=<asc_or_desc>&page=<page_no>&limit=<records_on_a_single_page>' \
                                    --header 'Content-Type: application/json'`
                                }
                            </div>
                        </li>

                        <li>ADD BLOG: (/blogs/add)
                            <ul>
                                <li>Add the blog with the provided body.</li>
                                <li>Required fields in the body: title, author_id, read_time, reads, reviews. Anything additional will be ignored.</li>
                                <li>Throws an error if any of the property is missing.</li>
                                <li>Throws an error if there's no author found corresponding to the provided author_id.</li>
                                <li>Autogenerates the meta-data (id, created_at, modified_at) and add it to the record.</li>
                            </ul>
                            Find the descriptive curl below. Substitute the body as per the requirement:
                            <div className="code">
                                {
                                    `curl --location --request POST 'https://kp-json-server.herokuapp.com/blogs/add' \
                                    --header 'Content-Type: application/json' \
                                    --data-raw '{
                                        "title": "Test",
                                        "author_id": 77,
                                        "read_time": 45,
                                        "reads": 107,
                                        "reviews": 37
                                    }
                                    '`
                                }
                            </div>
                        </li>


                        <li>GET BLOG BY ID: (/blogs/:id)
                            <ul>
                                <li>Fetches the blog with the matching id.</li>
                                <li>Throws an error if no blog is found.</li>
                            </ul>
                            Find the curl below.
                            <div className="code">
                                {
                                    `curl --location --request GET 'https://kp-json-server.herokuapp.com/blogs/7' \
                                    --header 'Content-Type: application/json'`
                                }
                            </div>
                        </li>

                        

                        <li>UPDATE BLOG: (/blogs/:id/update)
                            <ul>
                                <li>Update the blog with the provided body.</li>
                                <li>Required fields in the body: title, author_id, read_time, reads, reviews. Anything additional will be ignored.</li>
                                <li>Throws an error if any of the property is missing.</li>
                                <li>Throws an error if there's no author found corresponding to the provided author_id.</li>
                                <li>Throws an error if there's no blog found corresponding to the provided id.</li>
                                <li>Autogenerates the meta-data (modified_at) and update it to the record.</li>
                            </ul>
                            Find the descriptive curl below. Substitute the body as per the requirement:
                            <div className="code">
                                {
                                    `curl --location --request PUT 'https://kp-json-server.herokuapp.com/blogs/101/update' \
                                    --header 'Content-Type: application/json' \
                                    --data-raw '{"title": "Test", "author_id": 13, "read_time": 45, "reads": 107, "reviews": 37 } '`
                                }
                            </div>
                        </li>

                        <li>DELETE BLOG BY ID: (/blogs/:id/delete)
                            <ul>
                                <li>Deletes the blog with the matching id.</li>
                                <li>Throws an error if no blog is found.</li>
                            </ul>
                            Find the curl below.
                            <div className="code">
                                {
                                    `curl --location --request DELETE 'https://kp-json-server.herokuapp.com/blogs/101/delete' \
                                    --header 'Content-Type: application/json'`
                                }
                            </div>
                        </li>

                        <li>GET ALL AUTHORS: (/authors/all)
                            <ul>
                                <li>Fetches all the authors in a batch of 10 authors per page.</li>
                                <li>Filters are available on first_name, last_name, email and age_range. (Provide the corresponding parameters)</li>
                                <li>Sorting is available basis of each property, either in ASC or DESC. (Provide the property name to sort with; By default: id in ASC)</li>
                                <li>Pagination is available with a default batch size of 10 authors per page. (Provide the <b>limit</b> parameter to change the batch size)</li>
                            </ul>
                            Find the descriptive curl below. Substitute/Remove the parameters as per the requirement:
                            <div className="code">
                                {
                                    `curl --location --request GET 'https://kp-json-server.herokuapp.com/authors/all? \
                                    first_name=<first_name>&last_name=<last_name>&email=<email>&age_range=<beg>,<end>& \
                                    sort=<field_name>&order=<asc_or_desc>&page=<page_no>&limit=<records_on_a_single_page>' \
                                    --header 'Content-Type: application/json'`
                                }
                            </div>
                        </li>

                        <li>ADD AUTHOR: (/authors/add)
                            <ul>
                                <li>Add the author with the provided body.</li>
                                <li>Required fields in the body: first_name, last_name, age, email, blogs. Anything additional will be ignored.</li>
                                <li>Throws an error if any of the property is missing.</li>
                                <li>Throws an error if the email is invalid.</li>
                                <li>Autogenerates the meta-data (id, created_at, modified_at) and add it to the record.</li>
                            </ul>
                            Find the descriptive curl below. Substitute the body as per the requirement:
                            <div className="code">
                                {
                                    `curl --location --request POST 'https://kp-json-server.herokuapp.com/authors/add' \
                                    --header 'Content-Type: application/json' \
                                    --data-raw '{
                                        "first_name": "Pawan",
                                        "last_name": "Kumar",
                                        "age": 23,
                                        "email": "test@test.com",
                                        "blogs": 125
                                    }'`
                                }
                            </div>
                        </li>


                        <li>GET AUTHOR BY ID: (/author/:id)
                            <ul>
                                <li>Fetches the author with the matching id.</li>
                                <li>Throws an error if no author is found.</li>
                            </ul>
                            Find the curl below.
                            <div className="code">
                                {
                                    `curl --location --request GET 'https://kp-json-server.herokuapp.com/authors/7' \
                                    --header 'Content-Type: application/json'`
                                }
                            </div>
                        </li>

                        

                        <li>UPDATE AUTHOR: (/authors/:id/update)
                            <ul>
                                <li>Update the author with the provided body.</li>
                                <li>Required fields in the body: first_name, last_name, age, email, blogs. Anything additional will be ignored.</li>
                                <li>Throws an error if any of the property is missing.</li>
                                <li>Throws an error if the email is invalid.</li>
                                <li>Throws an error if there's no author found corresponding to the provided id.</li>
                                <li>Autogenerates the meta-data (modified_at) and update it to the record.</li>
                            </ul>
                            Find the descriptive curl below. Substitute the body as per the requirement:
                            <div className="code">
                                {
                                    `curl --location --request PUT 'https://kp-json-server.herokuapp.com/authors/7/update' \
                                    --header 'Content-Type: application/json' \
                                    --data-raw '{
                                        "first_name": "Pawan",
                                        "last_name": "Kumar",
                                        "age": 23,
                                        "email": "kp07iam@gmail.com",
                                        "blogs": 77
                                    }'`
                                }
                            </div>
                        </li>

                        <li>DELETE AUTHOR BY ID: (/authors/:id/delete)
                            <ul>
                                <li>Deletes the author with the matching id.</li>
                                <li>Throws an error if no author is found.</li>
                                <li>SPECIAL ASSUMPTION: Author Id 7 is master author and can't be deleted. All the blogs with the deleted author_id will fallback to author_id 7.</li>
                            </ul>
                            Find the curl below.
                            <div className="code">
                                {
                                    `curl --location --request DELETE 'https://kp-json-server.herokuapp.com/authors/21/delete' \
                                    --header 'Content-Type: application/json'`
                                }
                            </div>
                        </li>

                        
                    </ul>

                </div>
                <div></div>
                
            </div>
        );
    }
}

export default Documentation;