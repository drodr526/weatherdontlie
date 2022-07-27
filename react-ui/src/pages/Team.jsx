import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'

export default function Team() {

    const { teamID } = useParams();
    const [teamInfo, setTeamInfo] = useState();
    const [dashedTeamName, setDashedTeamName] = useState();
    const [weather, setWeather] = useState();


    useEffect(() => {
        axios.get('/api/teams/' + teamID)
            .then((res) => {
                setTeamInfo(res.data)

                const str = res.data.full_name.split(" ").join("-").toLowerCase(); //turns team name to lowercase and replaces spaces with dashes
                setDashedTeamName(str);
            })

        
    }, [])

    useEffect(() => {
        if (teamInfo)
            axios.get('/api/weather/' + teamInfo.city)
                .then((res) => {
                    setWeather(res.data)
                })

    }, [teamInfo])

    return (
        <div>
            {
                weather &&
                <div>
                <h1 className='teamNameBig'>{teamInfo.full_name}</h1>
                <img src={'https://loodibee.com/wp-content/uploads/nba-' + dashedTeamName + '-logo-300x300.png'}></img>
                <h2>{weather.location.name}, {weather.location.region}</h2>
                    <table className='weatherTable'>
                        <tr>
                            <td>
                                <h1 className='temperatureNumber'>{weather.current.temp_f}°</h1>
                            </td>
                            <td>
                                <img width={100} src={weather.current.condition.icon}></img>
                            </td>
                        </tr>
                    </table>
                    <h2>Feels like {weather.current.feelslike_f}°</h2>
                    <h2 className='condition'>{weather.current.condition.text}</h2>
                </div>

            }
        </div>
    )
}
