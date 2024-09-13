"use client";

import React, { useState } from 'react';
import '../app/styles/Page.css';
import Navbar from './components/Navbar';
import WeekCard from './components/ui/WeekCard';
import CreateEventForm from './components/ui/CreateEventForm';
import { Event } from '../Models/Event';
import moment from 'moment';

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isCreateEventFormVisible, setCreateEventFormVisible] = useState(false);

  const handleOpenForm = () => {
    setCreateEventFormVisible(true);
  };

  const handleCloseForm = () => {
    setCreateEventFormVisible(false);
  };

  const handleEventSubmit = (newEvent: Event) => {
    console.log(newEvent)
    setEvents([...events, newEvent]);
    setCreateEventFormVisible(false);
  };

  const eventsByWeek = events.reduce((acc, event) => {
    const eventWeek = moment(event.dateTime).week();
    if (!acc[eventWeek]) {
      acc[eventWeek] = [];
    }
    acc[eventWeek].push(event);
    acc[eventWeek].sort((a, b) => moment(a.dateTime).diff(moment(b.dateTime)));

    return acc;
  }, {} as { [key: number]: Event[] });

  return (
    <div className="h-full font-[family-name:var(--font-geist-sans)] bg-gray-200">
      <Navbar />
      <div className="container h-full w-full">
        <div className="header flex items-center justify-between bg-green-500 p-4 rounded-lg">
          <div className="h-wrap flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              width="24px"
              viewBox="0 -960 960 960"
              fill="#e8eaed"
              className="h-6 w-6 sm:h-8 sm:w-8"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
            <h1 className="ml-4 text-white font-bold text-sm sm:text-lg">Kalender for Sanne Husted Møller-kruse</h1>
          </div>
        </div>

        <div className="content h-full w-full p-4 mt-4 overflow-auto hover:overflow-scroll">
          <div className="tools flex flex-row flex-wrap justify-center place-content-around bg-slate-200 rounded-md">
            <div className='flex flex-row flex-wrap text-black place-content-around flex-wrap'>
              <button className="bg-green-300 p-4 m-2 rounded-md flex items-center justify-center md:flex-nowrap flex-wrap lg:min-w-64">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {/* Replace with your SVG icon */}
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l6 6 4-4 8 8" />
                </svg>
                Profil
              </button>
              <button className="bg-gray-300 p-4 m-2 rounded-md flex items-center justify-center md:flex-nowrap flex-wrap lg:min-w-64">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {/* Replace with your SVG icon */}
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
                </svg>
                Fremmøde
              </button>
              <button className="bg-gray-300 p-4 m-2 rounded-md flex items-center justify-center md:flex-nowrap flex-wrap lg:min-w-64">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {/* Replace with your SVG icon */}
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
                </svg>
                Status Rapport
              </button>
              <button className="bg-gray-300 p-4 m-2 rounded-md flex items-center justify-center md:flex-nowrap flex-wrap lg:min-w-64">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {/* Replace with your SVG icon */}
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
                </svg>
                Dokumenter
              </button>
            </div>

            <div className="flex flex-row flex-wrap text-black place-content-around">
              <button className="bg-gray-300 p-4 m-2 rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {/* Replace with your SVG icon */}
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
                </svg>
                {/* Label */}
              </button>
              <button className="bg-gray-300 p-4 m-2 rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {/* Replace with your SVG icon */}
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
                </svg>
                {/* Label */}
              </button>
              <button className="bg-gray-300 p-4 m-2 rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {/* Replace with your SVG icon */}
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
                </svg>
                {/* Label */}
              </button>
              <button className="bg-gray-300 p-4 m-2 rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {/* Replace with your SVG icon */}
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
                </svg>
                {/* Label */}
              </button>
              <button className="bg-gray-300 p-4 m-2 rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {/* Replace with your SVG icon */}
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
                </svg>
                {/* Label */}
              </button>
            </div>
          </div>

          {/* Tools bar to create events */}
          <div className="flex flex-row flex-wrap text-black place-content-around pt-2 gap-2">
            <button
              className="bg-green-300 p-4 rounded-md flex items-center justify-center lg:min-w-64 md:flex-nowrap flex-wrap"
              onClick={handleOpenForm}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l6 6 4-4 8 8" />
              </svg>
              Opret Begivenhed
            </button>

            <button
              className="bg-gray-300 p-4 rounded-md flex items-center justify-center lg:min-w-64 md:flex-nowrap flex-wrap"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l6 6 4-4 8 8" />
              </svg>
              Se tidligere begiveneder
            </button>

            {isCreateEventFormVisible && (
              <CreateEventForm
                onClose={handleCloseForm}
                onEventSubmit={handleEventSubmit}
              />
            )}
          </div>

          {/* Week card & Events */}
          <div className="h-full months pt-4 pb-4 grow">
            <div className="week-card">
              {Object.keys(eventsByWeek).map((week) => (
                <WeekCard
                  key={week}
                  events={eventsByWeek[parseInt(week)]}
                  weekNumber={parseInt(week)}
                />
              ))}
            </div>

          </div>
        </div>





      </div>
    </div>
  );
}
