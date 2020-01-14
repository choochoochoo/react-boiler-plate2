import { createSelector } from 'reselect'
import _ from 'lodash'

export const getStore = createSelector((state) => _.get(state, 'fines'), (state) => state)

export const getSearchDocuments = createSelector(getStore, (state) => _.get(state, 'searchDocuments', {}))

export const getServiceCode = createSelector(getStore, (state) => _.get(state, 'serviceCode', ''))
