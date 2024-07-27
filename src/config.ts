const getEnviromentVariable = (enviromentVariable: string) => {
  const unvalidatedEnviromentVarianle = process.env[enviromentVariable]
  if (!unvalidatedEnviromentVarianle) {
    throw new Error(
      `Couldn't find enviroment variable: ${enviromentVariable}`
    );
  } else {
    console.log(unvalidatedEnviromentVarianle)
    return unvalidatedEnviromentVarianle;
  }
}
export const config = {
  mongoUri: getEnviromentVariable("MONGO_URI")
}


