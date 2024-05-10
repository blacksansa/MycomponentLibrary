const getEnviromentVariable = (enviromentVariable: string) => {
  const unvalidatedEnviromentVarianle = process.env[enviromentVariable]
  console.log(unvalidatedEnviromentVarianle)
  if(!unvalidatedEnviromentVarianle) {
    throw new Error (
      `Couldn't find enviroment variable: ${enviromentVariable}`
    );
  } else {
    return unvalidatedEnviromentVarianle;
  }
}
export const config = {
  mongoUri: getEnviromentVariable("MONGO_URI")
}


