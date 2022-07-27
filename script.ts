import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {  
  // await prisma.user.deleteMany()
  const user = await prisma.user.create({data:{name:"karera olivier", email:"karera@gmail.com",image:"image"}})
  // const alluser = await prisma.user.update({where:{id:6}, data:{name:"karori"}})
  console.log(user)
  // console.log(alluser)
}
main().catch(e=>{
    console.error(e.message)
}).
finally(async () => {
       await prisma.$disconnect() 
    })