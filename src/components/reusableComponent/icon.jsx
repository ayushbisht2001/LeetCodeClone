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

export const Spinner = (props) => {

    const{
        color = "#3c4859",
        size = "25px",
        style = {}
    } = props;

    return(
        
    <span class=" fa fa-spinner fa-pulse " data-show="true" style = {{fontSize : size, color : color, textShadow : "0 0 5px rgb(0 0 0 / 30%)", ...style}}>

    </span>

        /* 
        <span
              style = {{fontSize : size, color : color, textShadow : "0 0 5px rgb(0 0 0 / 30%)", ...style}}
            >            
        <svg 
            className ="in-spinner" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style = {{fontSize : size, color : color, textShadow : "0 0 5px rgb(0 0 0 / 30%)", ...style}}

            >
                <path d="M14.25 2.25C14.25 3.49266 13.2427 4.5 12 4.5C10.7573 4.5 9.75 3.49266 9.75 2.25C9.75 1.00734 10.7573 0 12 0C13.2427 0 14.25 1.00734 14.25 2.25ZM12 19.5C10.7573 19.5 9.75 20.5073 9.75 21.75C9.75 22.9927 10.7573 24 12 24C13.2427 24 14.25 22.9927 14.25 21.75C14.25 20.5073 13.2427 19.5 12 19.5ZM21.75 9.75C20.5073 9.75 19.5 10.7573 19.5 12C19.5 13.2427 20.5073 14.25 21.75 14.25C22.9927 14.25 24 13.2427 24 12C24 10.7573 22.9927 9.75 21.75 9.75ZM4.5 12C4.5 10.7573 3.49266 9.75 2.25 9.75C1.00734 9.75 0 10.7573 0 12C0 13.2427 1.00734 14.25 2.25 14.25C3.49266 14.25 4.5 13.2427 4.5 12ZM5.10572 16.6443C3.86306 16.6443 2.85572 17.6516 2.85572 18.8943C2.85572 20.1369 3.86306 21.1443 5.10572 21.1443C6.34837 21.1443 7.35572 20.1369 7.35572 18.8943C7.35572 17.6517 6.34833 16.6443 5.10572 16.6443ZM18.8943 16.6443C17.6516 16.6443 16.6443 17.6516 16.6443 18.8943C16.6443 20.1369 17.6516 21.1443 18.8943 21.1443C20.1369 21.1443 21.1443 20.1369 21.1443 18.8943C21.1443 17.6517 20.1369 16.6443 18.8943 16.6443ZM5.10572 2.85572C3.86306 2.85572 2.85572 3.86306 2.85572 5.10572C2.85572 6.34837 3.86306 7.35572 5.10572 7.35572C6.34837 7.35572 7.35572 6.34837 7.35572 5.10572C7.35572 3.86306 6.34833 2.85572 5.10572 2.85572Z" 
                fill= {color}/>
                <circle cx="19.45" cy="4.95" r="2.75" fill={color} />
                </svg>
        </span> */

    )
}

    

