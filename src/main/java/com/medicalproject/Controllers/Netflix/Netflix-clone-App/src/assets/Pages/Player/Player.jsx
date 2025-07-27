import './Player.css'
const Player = () => {
  return (
    <div className='player'>
      <i className="fa fa-chevron-left" aria-hidden="true"></i>
      <iframe width="90%" height="90%" src='{https://www.youtube.com/watch?v=HZ_1oW0Z_B8&ab_channel=AliceVulimuOfficial}' title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>


      </div>




    </div>
  )
}

export default Player