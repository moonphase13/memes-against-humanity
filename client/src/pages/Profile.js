import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { useMutation } from '@apollo/client';
// import { REMOVE_MEME } from '../utils/mutations';

function Profile() {
  const { loading, error, data } = useQuery(GET_ME);
  // const [removeMeme] = useMutation(REMOVE_MEME);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);
    return <div>Error loading user information</div>;
  }

  const { me } = data;

  // const handleRemoveMeme = (memeId) => {
  //   removeMeme({
  //     variables: { memeId },
  //     update(cache, { data: { removeMeme } }) {
  //       cache.writeQuery({
  //         query: GET_ME,
  //         data: { me: removeMeme },
  //       });
  //     },
  //   });
  // };

  return (
    <div>
      <h2>{me.username}'s Profile</h2>
      <p>Email: {me.email}</p>
      <h3>Saved Memes</h3>
      <div className="card-columns">
        {me.memes.map((meme) => (
          <div className="card" key={meme._id}>
            <img src={meme.imageUrl} className="card-img-top" alt={meme.title} />
            <div className="card-body">
              <h5 className="card-title">{meme.title}</h5>
              <p className="card-text">{meme.description}</p>
              {/* <button className="btn btn-danger" onClick={() => handleRemoveMeme(meme._id)}>Delete</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
