import React, { useEffect, useState } from "react";
import { PostItem } from "../components/PostItem";
import { IPost } from "../models";
import { getAllPosts } from "../redux/features/post/postSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useTranslation } from 'react-i18next';

enum SortDirections {
  ascending = "ascending",
  descending = "descending",
}

export const FeedPostsPage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { posts, popularPosts, topicPosts } = useAppSelector(
    (state) => state.post
  );

  const [searchField, setSearchField] = useState("");
  const [filterPosts, setFilterPosts] = useState<IPost[]>([]);
  const [sortValue, setSortValue] = useState("");
  const [sortDirection, setSortDirection] = useState(SortDirections.ascending);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  useEffect(() => {
    setFilterPosts(posts);
  }, [posts]);

  useEffect(() => {
    const filter = posts
      .filter((post: IPost) => {
        return post.title.toLowerCase().includes(searchField.toLowerCase());
      })
      .sort((a: IPost, b: IPost) => {
        if (sortValue === "data") {
          return sortDirection === SortDirections.descending
            ? +b.createdAt - +a.createdAt
            : +a.createdAt - +b.createdAt;
        }
        if (sortValue === "views") {
          return sortDirection === SortDirections.descending
            ? b.views - a.views
            : a.views - b.views;
        }
        return 0;
      })
      .filter((post: IPost) => {
        if (!filterValue) {
          return post;
        } else {
          return post.topic === filterValue;
        }
      });
    setFilterPosts(filter);
  }, [searchField, sortValue, sortDirection, filterValue, dispatch, posts]);

  if (!posts.length) {
    return <div className=''>{t('feed-page.no-posts')}</div>;
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchField(e.currentTarget.value);
  };

  const handleSort = (value: string, e: any) => {
    setSortValue(value);
    console.log(e.currentTarget);
    setSortDirection((prev) => {
      return prev === SortDirections.ascending
        ? SortDirections.descending
        : SortDirections.ascending;
    });
  };

  return (
    <div className='section-wrapper'>
      <div className='feed-page__wrapper'>
        <div className='feed-feed__wrapper'>
          {filterPosts?.map((post, idx) => (
            <PostItem key={idx} post={post} />
          ))}
        </div>
        <div className='options'>
          <div className='options__search'>
            <label htmlFor='' className='options__title'>
            {t('right-side-menu.search')}
            </label>
            <div className='options__search_input'>
              <input
                type='search'
                id=''
                name=''
                className=''
                placeholder={t('right-side-menu.search-placeholder')}
                onChange={handleChange}
              />
              <button>
                <div className='icon-search'></div>
              </button>
            </div>
          </div>

          <div className='sort'>
            <p className='options__title'>{t('right-side-menu.sort')}</p>
            <div className='sort__item'>
              <p className=''>{t('right-side-menu.sort-by-date')}</p>
              <button
                className={
                  sortValue === "data"
                    ? sortDirection === SortDirections.ascending
                      ? "btn-sort_active ascending"
                      : "btn-sort_active"
                    : "btn-sort"
                }
                onClick={(e) => {
                  handleSort("data", e);
                }}
              ></button>
            </div>
            <div className='sort__item'>
              <p className=''>{t('right-side-menu.sort-by-popularity')}</p>
              <button
                className={
                  sortValue === "views"
                    ? sortDirection === SortDirections.ascending
                      ? "btn-sort_active ascending"
                      : "btn-sort_active"
                    : "btn-sort"
                }
                onClick={(e) => {
                  handleSort("views", e);
                }}
              ></button>
            </div>
          </div>

          <div className='theme'>
            <p className='options__title'>{t('right-side-menu.topics')}</p>
            <div className='theme__item'>
              <button
                className={"btn-filter"}
                onClick={(e) => {
                  setFilterValue("travel");
                }}
              ></button>
              <div className=''>{t('right-side-menu.traveling')}</div>
            </div>
            <div className='theme__item'>
              <button
                className={"btn-filter"}
                onClick={(e) => {
                  setFilterValue("education");
                }}
              ></button>
              <div className=''>{t('right-side-menu.education')}</div>
            </div>
            <div className='theme__item'>
              <button
                className={"btn-filter"}
                onClick={(e) => {
                  setFilterValue("sport");
                }}
              ></button>
              <div className=''>{t('right-side-menu.sport')}</div>
            </div>
            <div className='theme__item'>
              <button
                className={"btn-filter"}
                onClick={(e) => {
                  setFilterValue("health");
                }}
              ></button>
              <div className=''>{t('right-side-menu.health')}</div>
            </div>
          </div>
          <button
            className='btn'
            onClick={(e) => {
              setFilterValue("");
            }}
          >
            Отменить
          </button>
        </div>
      </div>
    </div>
  );
};