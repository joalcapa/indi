import './index.css';

const EpisodesList = (props) => (
    <div className='episodes-list-content'>
      <h3 className="box-shadow episodes-count"><b>Episodes: {props.episodes.length}</b></h3>
      <div className="table box-shadow list-content">
        <div className="table-row header">
          <div className="table-cell">Title</div>
          <div className="table-cell">Date</div>
          <div className="table-cell">Duration</div>
        </div>
        {props.episodes.map((item, index) => (
          <div className="table-row" key={index}>
            <div className="table-cell">{item.title}</div>
            <div className="table-cell">{item.date}</div>
            <div className="table-cell">{item.duration}</div>
          </div>
        ))}
      </div>
    </div>
);

export default EpisodesList;