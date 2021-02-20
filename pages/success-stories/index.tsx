import Head from 'next/head'
import { useState, useEffect } from 'react'

import { DisplayMap } from '../../components'
import {
  TranslatedRecordResponse,
  LocationRecord,
  OrgRecord,
} from '../../types/records'
import { fetchRecordsByCategory } from '../../services/GET'

import { RecordPane } from '../../components'

const category: string = 'Transportation'

const SuccessStories = () => {
  const successStories = [
    {
      name: 'Arturo',
      role: 'President of BIG E',
      organization: 'Alan Hancock College',
      profilePic: '/cheech.jpg',
      bio: 'some info about cheech',
    },
    {
      name: 'Leo Rios',
      role: 'Manager',
      organization: 'Santa Barbara Rescue Mission',
      profilePic: '/cheech.jpg',
      bio: 'some info about Leo',
    },
  ]

  return (
    <>
      <Head>
        <title>{`Santa Barbara Reentry | Success Stories`}</title>
      </Head>
      {successStories.map((successStory, key) => {
        return (
          <div key={key}>
            <img src="/images/cheech.jpg" alt="marker logo" />
            <h1>{successStory.name}</h1>
            <h2>{successStory.role}</h2>
            <h2>{successStory.organization}</h2>
          </div>
        )
      })}
      {/* {Boolean(convertedLocRecords?.length) && (
        <DisplayMap latLongInfo={convertedLocRecords} page="search" />
      )} */}
    </>
  )
}

export default SuccessStories
