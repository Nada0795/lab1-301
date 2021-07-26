import React from 'react';
import HornedBeasts from './HornedBeasts';
import data from '../data.json';

class Main extends React.Component {
    render() {
        return (
            <main>

{
                data.map((elements) =>{
                    return <HornedBeasts title={elements.title}
                    image_url={elements.image_url}
                    description={elements.description}/>
                })


            }
                {/* <HornedBeasts
                    title="Uni-Corn Fake"
                    img="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"
                    description="cartoon character"
                />
                <HornedBeasts
                    title="Uni-Corn Real"
                    img="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q"
                    description="real animal" */}
                {/* /> */}
            </main>
        )
    }
}
export default Main;