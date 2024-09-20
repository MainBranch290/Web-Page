// import {NextResponse} from "next/server";

// export async function middleware(request){
//     const path = request.nextUrl.pathname;
//     const isPublicPath = path ==="/Login";
//     const accessToken =(request.cookies.get("token")||{}).value ||"";

//     const fetchWithTimeout =async (resource, options={}, timeout =5000)=>{
//         const controller =new AbortController();
//         const id = setTimeout(()=> controller.abort(), timeout);
//         try {
//             const responsen= await fetch (resource,{
//                 ...options,
//                 signal:controller.signal,
//             });
//             clearTimeout(id);
//             return responsen;
//         }catch(error){
//             clearTimeout(id);
//             throw error;
//         }
//     };
//    if (isPublicPath && accessToken){
//     return NextResponse.redirect(new URL ("/home",request.nextUrl));
//    } 
//    if (!isPublicPath && !accessToken){
//     return NextResponse.redirect(new URL ("/Login",request.nextUrl));
//    } 
//    return NextResponse.next();
// }

// export const config ={
//     matcher:[
//         // "/home",
//         // "/Login",
//         // "/KVISION",
//         // "/KMS"

//     ],
// };
