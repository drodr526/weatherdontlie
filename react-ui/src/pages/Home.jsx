import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from 'axios';
import { useNavigate } from 'react-router';

function Home() {

    const navigate = useNavigate();
    const [teams, setTeams] = useState();

    const getTeams = () => {
        axios.get('/api/teams')
            .then((res) => setTeams(res.data.data))
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1 class='logo'>WEATHER DON'T LIE</h1>
            </header>
            <main>
                <Button
                    variant="contained"
                    target="_blank"
                    size="large"
                    onClick={getTeams}
                    sx={{ m: 2, bgcolor: "#fff", color: "black", fontSize: '2rem', fontFamily: 'Oswald', fontWeight: '400', minWidth: '200px', minHeight: '75px' }}
                >
                    Get teams
                </Button>
                <div className="teamsList">
                    {teams && teams.map((team) => <p className="teamLink" onClick={()=>navigate('/teams/' + team.id)}>{team.full_name}</p>)}
                </div>
            </main>
        </div>
    );
}

export default Home;
