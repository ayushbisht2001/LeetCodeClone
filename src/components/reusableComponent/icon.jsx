import './styling/icon.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const RightChevronIcon = (props) =>{
    return( 
        <i className = "right-chevron-icon"  ></i>
    )
}

export const CustomChevronIcon = (props) => {

    const{
    type = 0,
    sx ={},
    onClick
    } = props;

    return(
        <div 
        className = "custom-chevron-box" 
        style = {{...sx}}
        onClick = {onClick}
        >{type ?
            <i class="fa fa-chevron-circle-right fa-sm" style = {{ fontSize : "13px"}} aria-hidden="true"></i>
            : 
            <i class="fa fa-chevron-circle-left fa-sm"  style = {{ fontSize : "13px"}} aria-hidden="true"></i>

        }

        
        </div>

    )

} 

export const HeartIcon = (props) => {

    const{
        color = "rgb(198, 40, 40)",
        style,
        size
    } = props;

    return (
        <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24"  
            xmlns="http://www.w3.org/2000/svg"
            style = {{
                ...style,
                transform : `scale(${size/10})`
            }}    
        >
            <path 
            fill-rule="evenodd" 
            clip-rule="evenodd" 
            d="M11.8807 3.83865C13.4432 1.97255 14.5408 0.358996 16.9588 0.0394134C21.4842 -0.550586 25.6385 4.75047 23.3533 9.96883C22.703 11.455 21.3787 13.2228 19.9139 14.957C18.3065 16.8611 16.5272 18.7272 15.2811 20.1418L11.8826 23.9992L9.07405 20.9062C5.69515 17.1829 0.195148 12.4964 -0.000164333 6.69031C-0.123211 2.62289 2.68148 0.017065 5.90804 0.0639967C8.79085 0.108694 10.0096 1.74907 11.8807 3.83865Z" 
            fill={color}/>
        </svg>

    )

}