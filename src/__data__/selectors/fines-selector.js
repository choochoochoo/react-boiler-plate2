import { createSelector } from 'reselect'
import _ from 'lodash'

export const getStore = createSelector((state) => _.get(state, 'fines'), (state) => state)

export const getFines = createSelector(getStore, (state) => _.get(state, 'responseFines.body.fines', []))

