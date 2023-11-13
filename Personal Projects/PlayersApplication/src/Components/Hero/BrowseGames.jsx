import { Button, Card, CardActionArea, CardMedia } from '@mui/material'
import React from 'react'

function BrowseGames({games}) {
     const btn = {
        fontSize:'18px',
        color:'rgba(51,144,255)',
        padding:'12px',
        "&:hover": {
          background:'rgb(50,84,104)',
        },
      };
  return (
    <div className='container'>
        <div className="wraper">
        <div className="nav">
       <div className="section-heading">Browse games</div>
        <Button size="medium" sx={btn}>View all</Button>
        </div>
        
        <div className='game-cards'>
            {games.map((game)=>{
                return (
                    <>
                    <div className="card-content" key={game.id}>
      <Card sx={{ minWidth: 250 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="320px"
            image={game.image}
            alt="green iguana"
          />
        </CardActionArea>
      </Card>
      <div className='card-taxt'>{game.text}</div>
      </div>
                    </>
                )
            })}
    </div>
    </div>
    </div>
  )
}

export default BrowseGames