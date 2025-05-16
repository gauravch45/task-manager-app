// This file defines the routes for user-related operations.
import Navbar from '../components/Navbar';

function Home() {
    return (
        <div style={{ padding: '2rem' }}>
            < Navbar />
            <h2>Welcome to the Home Page</h2>
            <p>This is a simple home page for the task management application.</p>
            <p>You can navigate to different sections using the links in the navbar.</p>
        </div>
    );
}

export default Home;
