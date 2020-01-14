import React, { useEffect } from 'react'
import style from './fines.css'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as actions from '../../__data__/actions'
import * as selectors from '../../__data__/selectors'

export const FinesPure = ({ getFines }) => {
    useEffect(() => {
        getFines()
    }, [])

    return (
        <div className={style.root}>
            fines
        </div>
    )
}

const mapStateToProps = () => createStructuredSelector({
    fines: selectors.fines.getFines,
})

const mapDispatchToProps = (dispatch) => ({
    getFines: () => dispatch(actions.getFines()),
})

export const Fines = connect(mapStateToProps, mapDispatchToProps)(FinesPure)
