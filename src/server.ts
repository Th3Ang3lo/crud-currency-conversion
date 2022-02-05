import 'reflect-metadata'
import 'dotenv/config'

import cors from 'cors'

import express from 'express'

import { Routes } from '@routes/index'

const app = express()

app.use(cors('*'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(Routes)

const port = process.env.PORT || 3333
app.listen(port, () => console.log(`Running on port ${port}`))
