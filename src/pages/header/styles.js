import styled from 'styled-components/macro';
import { Link} from 'react-router-dom'



export const Featured = styled.div`
    height: 70vh;
    margin-top: 80px;
    background-size: "cover";
    background-position: "center";
    @media (max-width: 768px) {
        height: fit-content;
    }

`
export const FeaturedVertical = styled.div`
width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);


`
export const FeaturedHorizontal = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 30%, transparent 70%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-bottom: 100px;
    padding-top: 70px;


`
export const FeaturedName = styled.div`
    font-size: 60px;
    font-weight: bold;
    font-family: "lato";
    background: -webkit-linear-gradient(grey, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 768px) {
       font-size:30px;
    }

`
export const FeaturedInfo = styled.div`
    font-size: 22px;
    font-weight: bold;
    margin-top: 15px;
    font-family: "lato";
    @media (max-width: 768px) {
        font-size: 16px;
    }

`
export const FeaturedPoints = styled.div`
    margin-right: 14px;
    display: inline-block;
    font-family: "lato";
    font-size:1rem;
    color:grey;
    color: green;
    font-size:1.5rem;


`
export const FeaturedYear = styled.div`
    margin-right: 14px;
    display: inline-block;
    font-family: "lato";
    font-size:1rem;
    color:grey;

`
export const FeaturedSeasons = styled.div`
    margin-right: 14px;
    display: inline-block;
    font-family: "lato";
    font-size:1rem;
    color:grey;



`


export const FeaturedDescription = styled.div`
    margin-top: 15px;
    font-size: 15px;
    color: #999;
    max-width: 500px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5; 
    -webkit-box-orient: vertical;
    font-family: "lato";
    line-height: 1.5;
    letter-spacing: 2px;
    @media (max-width: 768px) {
        font-size: 14px;
        max-width: 100%;
        margin-right: 30px;
    }
    

`
export const FeaturedButtons = styled.div`
    margin-top: 15px;
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
        
    }

`
export const FeaturedWatchButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content:space-between;
    font-size: 12px;
    font-weight: bold;
    padding: 10px 25px;
    text-decoration: none;
    opacity: 1;
    transition: all ease 0.2s;
    background-color: rgba(0,0,0,0.5);
    color: #fff;
    &: hover{
        opacity: 0.3;
    }
    @media (max-width: 768px) {
        font-size: 16px;
        margin-top: 5px;
        width: 95%;
        padding:10px;
        
    }



`
export const FeaturedMyListButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content:space-between;
    font-size: 12px;
    font-weight: bold;
    padding: 10px 25px;
    text-decoration: none;
    opacity: 1;
    transition: all ease 0.2s;
    background-color: rgba(0,0,0);
    color: #fff;
    &: hover{
        opacity: 0.3;
    }
    @media (max-width: 768px) {
        font-size: 16px;
        margin-top: 5px;
        width: 95%;
        padding:10px;
        
    }


`

export const FeaturedMarkFavorites = styled.p`
    color:green;

`
export const FeaturedAddToWatchList = styled.p`
    color:#EB4964;
`
export const FeaturedAddNote = styled.p`
    color:yellow;
`
export const FeaturedGenres = styled.div`
    margin-top: 15px;
    font-size: 18px;
    color: #999;
    @media (max-width: 768px) {
        font-size: 14px;
        
    }


`



export const CloseModal = styled.div`
    position: absolute;
    right:0;
    top: 0;


`
export const Form = styled.form`
    display:flex;
    flex-direction: column;


`
export const CommentBox = styled.textarea`
    width:100%;
    margin-bottom:10px;
    margin-top:5px;
    border:none;
    outline-width:0;
    padding:10px;
    border-radius:4px;


`
export const AddCommentButton = styled.button`
    width:25%;
    background-color:rgb(70,70,70);
    border:none;
    color:white;
    padding: 5px;
    border-radius:4px;

`
