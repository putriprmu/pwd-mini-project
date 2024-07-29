"use client";
import * as React from "react";
import CardEvent from "../../_components/card-event";
import CategoryDesktop from "../home/category-hero-desktop";
import axios from "axios";
import { NEXT_PUBLIC_BASE_API_URL } from "@/lib/env";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface ICategoryAllSectionProps {}

const CategoryAllSection: React.FunctionComponent<ICategoryAllSectionProps> = (
  props,
) => {
  const [event, setEvent] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    onHandleGet();
  }, []);

  const [displayedEvents, setDisplayedEvents] = React.useState(10);

  const onHandleGet = async () => {
    try {
      setLoading(true);

      let url = NEXT_PUBLIC_BASE_API_URL + "/events";
      const response = await axios.get(url);
      // Sort events by date (ascending order)
      const sortedEvents = response.data.result.sort(
        (a: any, b: any) =>
          new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
      );
      setEvent(sortedEvents);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="all">
      <CategoryDesktop />
      <div className="mx-[20px] my-[26px] md:mx-[140px]">
        <div className="flex flex-col justify-between">
          <h1 className="text-[14px] font-semibold md:text-[24px]">
            Upcoming Concert...
          </h1>
          <h1 className="mt-[4px] text-[12px] md:mt-[14px] md:text-[14px]">
            "We will meet soon!"
          </h1>
        </div>
        <div className="my-[18px] flex gap-4 overflow-hidden overflow-x-auto md:grid md:grid-cols-5">
          {loading
            ? Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="col-span-1">
                  <Skeleton height={288} />
                </div>
              ))
            : event
                .slice(0, displayedEvents / 2)
                .map((event: any, index: number) => (
                  <div key={index}>
                    <CardEvent
                      id={event.id}
                      judul={event.name}
                      lokasi={event.location.name}
                      waktu={event.startDate}
                      harga={event.price}
                      urlImage={NEXT_PUBLIC_BASE_API_URL + event.imageURL}
                    />
                  </div>
                ))}
        </div>
        <div className="my-[18px] flex gap-4 overflow-hidden overflow-x-auto md:grid md:grid-cols-5">
          {loading
            ? Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="col-span-1">
                  <Skeleton height={288} />
                </div>
              ))
            : event
                .slice(displayedEvents / 2, displayedEvents)
                .map((event: any, index: number) => (
                  <div key={index}>
                    <CardEvent
                      id={event.id}
                      judul={event.name}
                      lokasi={event.location.name}
                      waktu={event.startDate}
                      harga={event.price}
                      urlImage={NEXT_PUBLIC_BASE_API_URL + event.imageURL}
                    />
                  </div>
                ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryAllSection;
