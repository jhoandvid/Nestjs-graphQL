import { Args, Float, Int, ObjectType, Query, Resolver } from '@nestjs/graphql';


@Resolver()
export class HelloWorldResolver {

    

    @Query(()=>String, {description:'Hola mundo es lo que retorna', name:'hello'})
    helloWorld():string {
        return 'Hola mundo'
    }
    
    @Query(()=>Float, {name:'randomNumber'})
    getRandomNumber():number{
        return Math.random()*100;
    }

    @Query(()=>Int,{name:'randomFromZeroTo', description:'From zero to argument To'})
    getRandowFromZeroTo(@Args('to') to:number):number{
        return Math.floor(Math.random()*to);
    }

    

       
        
    


}
